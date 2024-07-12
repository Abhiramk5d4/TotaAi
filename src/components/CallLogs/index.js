import React from 'react';
import './index.css';

function CallLogs() {
  return (
    <div className="assistants-container">
      <div className="create-assistant-container">
      <div className="tools-container">
      <input className="input-call-element" type="search" placeholder='Search all columns..' />
      </div>
      </div>
      <div className="no-assistants">
        <h2>No Assistants Found</h2>
        <p>Create a new assistant to get started with your first conversation.</p>
      </div>
    </div>
  );
}

export default CallLogs;