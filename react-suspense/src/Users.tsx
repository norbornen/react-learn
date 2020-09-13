import React from 'react';

export const Users: React.FC<{ resource: any }> = ({ resource }) => {
  const users = resource.users.read();
  return (
    <>
      <h3>Users</h3>
      <ul>{
        users.map((user: Record<string, any>) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))
      }</ul>
    </>
  )
};
