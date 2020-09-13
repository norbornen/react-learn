import React from 'react';

export const FormattedDate: React.FC<{ date: Date }> = ({ date }) => {
  return (
    <>{ date && date.toLocaleString() }</>
  );
};
