import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>О проекте</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
        praesentium facere explicabo officiis iure, minus repellat eveniet est
        libero unde.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
        praesentium facere explicabo officiis iure, minus repellat eveniet est
        libero unde.
      </p>
      <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  );
};
