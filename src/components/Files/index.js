import React from 'react';
import './index.css';

function Files() {
  return (
    <div className="assistants-container">
      <div className="create-assistant-container">
      <div className="tools-container">
        <button className="button-assistant hover">Upload Files  +</button>
        </div>
      </div>
      <div className="no-assistants">
        <h2>No Files Found</h2>
        <p>Upload a document to get started.
        </p>
      </div>
    </div>
  );
}

export default Files;