import React, { Suspense } from 'react';
import { useResource } from './resource';
import { Posts } from './Posts';
import { Users } from './Users';

const resource = useResource();

function App() {
  return (
    <div className="container">
      <h1>Suspense for Data Fetching</h1>

      <Suspense fallback={<p>loading...</p>}>
        <Posts resource={resource} />
      </Suspense>

      <Suspense fallback={<p>loading...</p>}>
        <Users resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
