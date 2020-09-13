import React, { useEffect, useState } from 'react';
import { FormattedDate } from './FormattedDate';

export const Clock = () => {
  const [ state, setState ] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setState(new Date()), 1000 + Math.trunc(200*Math.random()));

    return () => {
      clearInterval(timer)
    };
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-1">Clock</h1>
      <h2 className="display-4"><FormattedDate date={state} /></h2>
    </div>
  );
};
