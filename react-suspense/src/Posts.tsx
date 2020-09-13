import React from 'react';

export const Posts: React.FC<{ resource: any }> = ({ resource }) => {
  const posts = resource.posts.read();
  return (
    <>
      <h3>Posts</h3>
      <ul>{
        posts.map((post: Record<string, any>) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))
      }</ul>
    </>
  )
};
