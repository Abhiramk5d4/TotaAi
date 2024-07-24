import React from 'react';
import { RiLandscapeLine } from "react-icons/ri";


import './index.css';

const PersonalityTab = () => {
  return (
        <div className="model-section">
            <div className="section-header">
                <h2 className='identity-heading'>Identity</h2>
            </div>
            <div className="section-peroson-body">
                <div className="input-group">
                    <label className='label-peroson-element'>Name</label>
                    <input className='input-model' type="text" placeholder="Give Your AI a name..." />
                </div>
                <div className="avatar-container">
                    <div className="avatar-header">
                        <RiLandscapeLine className='avatar-image' />
                        <h2 className="avatar-heading">AVATAR</h2>
                    </div>
                    <button className="upload-button-image">Upload Image</button>
                    <div className="avatar-options">
                    </div>
                 </div>
            </div>

            <div className="section-header">
                <h2 className='behaviour-heading'>Behaviour</h2>
            </div>
            <div className="section-body">
                <div className="section">
                    <h2 className="section-agent-heading">Agent Greeting</h2>
                    <p className="section-description">
                        Your agent will say this message to start every conversation.
                    </p>
                    <textarea className="greeting-agent-input" placeholder="e.g. Hey! How may we be of assistance today?"></textarea>
                </div>
                <div className="section">
                    <h2 className="section-agent-heading">Agent Behaviour</h2>
                    <div className="behavior-option">
                        <h3 className="option-heading">Professional Use Case</h3>
                        <p className="option-description">
                            Configured to be more polite, formal, staying on task, and assisting.
                        </p>
                    </div>
                    <div className="behavior-option">
                        <h3 className="option-heading">Character Use Case</h3>
                            <p className="option-description">
                                 Configured to assume and impersonate identity.
                            </p>
                    </div>
                    <div className="behavior-option">
                        <h3 className="option-heading">Super Chatty</h3>
                        <p className="option-description">
                            For casual laid-back conversations, like you are talking to a friend.
                        </p>
                    </div>
                 </div>
            </div>
        </div>
  );
};

export default PersonalityTab;



