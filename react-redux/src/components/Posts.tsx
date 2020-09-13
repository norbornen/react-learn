import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {Post as IPost} from '../interfaces';
import { RootState } from '../redux/rootReducer';

interface PostsProps {
  posts: IPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>Постов нет...</p>;
  }

  return (
      <div>{ posts.map((post) => <Post post={post} key={post.id} />) }</div>
  );
};

const mapStateToProps = (state: RootState): PostsProps => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps)(Posts);
