import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import Alert from './components/Alert';

function App() {
  return (
    <div className="container pt-3">
      <Alert />
      <div className="row">
        <div className="col">
          <h2>Новый пост</h2>
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
