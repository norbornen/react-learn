import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { thunkFetchPosts } from '../redux/store/posts/thunks';
import {Post as IPost} from '../interfaces';
import Post from './Post';


const FetchedPosts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector<RootState, IPost[]>((state) => state.posts.fetchedPosts);
  const loading = useSelector<RootState, boolean>((state) => state.app.loading);

  if (loading) {
    return <>Посты загружаются...</>;
  }
  if (!posts || posts.length === 0) {
    return <button className="btn btn-primary" onClick={() => dispatch(thunkFetchPosts())}>Загрузить</button>;
  }

  return (
    <div>{ posts.map((post) => <Post post={post} key={post.id} />) }</div>
  );
};

export default FetchedPosts;
