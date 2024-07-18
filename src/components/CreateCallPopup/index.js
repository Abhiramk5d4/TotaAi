import React from 'react';
import './index.css';

const CreateCallPopup = ({isOpen, onClose }) => {


  if (!isOpen) return null;
  return (

    <div className="popup-overlay">
      
      <div className="popup-container">
      
        <div className="popup-header">
          <h2 className="title">Human conversations with AI.</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="agent-card">
          <h1>Agent Details</h1>
        </div>
        <div>
        <button className="talk-button-ele">Talk</button>
        <button className="call-button">Call a number</button>

        </div>
       
      </div>
    </div>
  );
};

export default CreateCallPopup;