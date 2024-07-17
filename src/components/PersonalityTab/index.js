import React from 'react';
import './index.css';

const PersonalityTab = () => {
  return (
        <div className="model-section">
            <div className="section-header">
                <h2 className='model-heading'>Identity</h2>
            </div>
            <div className="section-body">
                <div className="input-group">
                    <label>Name</label>
                    <input className='input-model' type="text" placeholder="Give Your AI a name..." />
                </div>
                <div className="input-group">
                    <label>System Prompt</label>
                    <textarea className='textarea-element' placeholder="This is a blank template with minimal defaults, you can change the model, temperature, and messages."></textarea>
                </div>
                <div className="avatar-container">
      <div className="avatar-header">
        <img src="path/to/avatar-icon.png" alt="avatar icon" className="avatar-icon" />
        <h2 className="avatar-heading">AVATAR</h2>
      </div>
      <button className="upload-button">Upload Image</button>
      <div className="avatar-options">
        <img src="path/to/avatar1.png" alt="avatar 1" className="avatar-option" />
        <img src="path/to/avatar2.png" alt="avatar 2" className="avatar-option" />
        <img src="path/to/avatar3.png" alt="avatar 3" className="avatar-option" />
        <img src="path/to/avatar4.png" alt="avatar 4" className="avatar-option" />
      </div>
    </div>
            </div>


            <div className="section-header">
                <h2 className='behaviour-heading'>Behaviour</h2>
            </div>
            <div className="section-body">
                <div className="input-group">
                    <label>Name</label>
                    <input className='input-model' type="text" placeholder="Give Your AI a name..." />
                </div>
            </div>
        </div>
  );
};

export default PersonalityTab;

