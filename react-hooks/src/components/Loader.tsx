import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="text-center">
      <div className="spinner-border text-primary">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
