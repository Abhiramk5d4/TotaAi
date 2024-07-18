import React from 'react';
import './index.css';

function Squads() {
  return (
    <div className="assistants-container">
      <div className="create-assistant-container">
      <div className="squads-container">
        <button className="button-assistant hover">New Team  +</button>
        </div>
      </div>
      <div className="no-assistants">
        <h2>No Team Found
        </h2>
        <p>Create a new Team.</p>
      </div>
    </div>
  );
}

export default Squads;