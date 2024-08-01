import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import './index.css';

export default function Loading() {
  return (
    <div className="loading">
      <LoadingBar />
    </div>
  );
}
