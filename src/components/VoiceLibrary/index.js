import React from 'react';
import './index.css';

function VoiceLibrary() {
  return (
    <div className="assistants-container">
      <div className="create-assistant-container">
        <button className="button-assistant hover">Create Assistant  +</button>
      </div>
      <div className="no-assistants">
        <h2>No Assistants Found</h2>
        <p>Create a new assistant to get started with your first conversation.</p>
      </div>
    </div>
  );
}

export default VoiceLibrary;