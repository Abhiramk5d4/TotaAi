import React from 'react';
import './index.css';

const TranscriptionSettings = () => {
  return (
    <div className="transcription-settings">
      <h2>Transcription</h2>
      <p>This section allows you to configure the transcription settings for the assistant.</p>
      <div className="settings-group">
        <div className="setting">
          <label htmlFor="provider">Provider</label>
          <select id="provider" name="provider">
            <option value="deepgram">deepgram</option>
            <option value="deepgram">talkscriber</option>
            <option value="deepgram">gladia</option>
          </select>
        </div>
        <div className="setting">
          <label htmlFor="language">Language</label>
          <select id="language" name="language">
            <option value="en">en</option>
            <option value="en">hi</option>
            <option value="en">tel</option>
            <option value="en">en-AU</option>
            <option value="en">en-AB</option>
            <option value="en">it</option>
            <option value="en">fa</option>
            <option value="en">en-En</option>
          </select>
        </div>
      </div>
      <div className="settings-group">
        <div className="setting">
          <label htmlFor="model">Model</label>
          <select id="model" name="model">
            <option value="nova-2">Nova 2</option>
            <option value="nova-2">Nova 2 Meeting</option>
            <option value="nova-2">Nova 2 Generel</option>
            <option value="nova-2">Nova 2 VoiceMail</option>
            <option value="nova-2">Nova 2 Video</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TranscriptionSettings;