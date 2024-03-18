import React from 'react';

const Status = ({ statusText }) => {
  return (
    <div className="status">
      <p>{statusText || 'No status'}</p>
    </div>  
  );
};

export default Status;

