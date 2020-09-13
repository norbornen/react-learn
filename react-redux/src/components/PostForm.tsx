import React from 'react';
import {connect} from 'react-redux';
import {Post} from '../interfaces';
import {createPost} from '../redux/store/posts/actions';
import {showWarningAlert, showInfoAlert } from '../redux/store/alert/actions';

interface PostFormProps {
  createPost: typeof createPost,
  showWarningAlert: typeof showWarningAlert,
  showInfoAlert: typeof showInfoAlert
}

interface PostFormState {
  title: string;
}

class PostForm extends React.Component<PostFormProps, PostFormState> {
  constructor(props: PostFormProps) {
    super(props);

    this.state = {
      title: ''
    };
  }

  changeInputHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    ev.persist();
    this.setState((prev) => ({ ...prev, ...{
      [ev.target.name]: ev.target.value
    }}))
  }

  submitHandler(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const { title } = this.state;

    if (!/\S/.test(title)) {
      return this.props.showWarningAlert('Не заполнены обязательные поля!');
    }

    const newPost: Post = {
      title: title.trim(), id: Date.now().toString()
    };

    this.setState({ title: '' });

    this.props.createPost(newPost);
    this.props.showInfoAlert('Создан новый синхронный пост!');
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <div className="form-group">
          <label htmlFor="exampleInput1">Заголовок поста</label>
          <input
            value={this.state.title}
            onChange={this.changeInputHandler.bind(this)}
            name="title"
            type="text"
            className="form-control"
            id="exampleInput1"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Сохранить
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost, showWarningAlert, showInfoAlert
}

export default connect(null, mapDispatchToProps)(PostForm);
