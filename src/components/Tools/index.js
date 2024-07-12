import React from 'react';
import './index.css';

function Tools() {
  return (
    <div className="assistants-container">
      <div className="create-tools-container">
        <div className="tools-container">
          <button className="button-assistant hover">New Tool  +</button>
          <input className="input-tools-element" type="search" placeholder='Search all columns..' />
        </div>
      </div>
      <div className="no-assistants">
        <h2>No Tools Found</h2>
        <p>Create a new Tool to get started.</p>
      </div>
    </div>
  );
}

export default Tools;