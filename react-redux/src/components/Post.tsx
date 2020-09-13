import React from 'react';
import { Post as IPost } from '../interfaces';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.id}</h6>
        <p className="card-text">{post.id}</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Post;
