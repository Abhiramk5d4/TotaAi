import React from 'react';
import './index.css';

function StatusDashboard() {
  return (
    <div className="dashboard-container">
      <div className="header-statusbar">
        <div className="id-container">
            <h1 className='dashboard-heading'>Abhi</h1>
            <span className="id">df53c2fa-ccc2-4464-b...</span>
        </div>
        <button className="talk-button">Talk with Abhi</button>
      </div>

      

      <div className="tabs">
        <div className='tabs-container'>
            <div className='tabs-detail-container'>
                <button className="tab">Model</button>
                <button className="tab">Transcriber</button>
                <button className="tab">Voice</button>

            </div>
            <div className='tabs-detail-container'>
                <button className="tab">Functions</button>
                <button className="tab">Advanced</button>
                <button className="tab">Analysis</button>

            </div>

        </div>

     <div className="metrics">
        <div className="metric">
            <div className='metric-scale'> <span className="label">Cost</span>
            <span className="value">$0.08 /min</span></div>
          
          <div className="bar cost-bar"></div>
        </div>
        <div className="metric">
            <div className='metric-scale'>
            <span className="label">Latency</span>
            <span className="value">700 ms</span>

            </div>
          
          <div className="bar latency-bar"></div>
        </div>
      </div>

       
       
      </div>

      <div className="model-section">
        <div className="section-header">
          <h2 className='model-heading'>Model</h2>
          <p className='para-model'>This section allows you to configure the model for the assistant.</p>
        </div>
        <div className="section-body">
          <div className="input-group">
            <label>First Message</label>
            <input className='input-model' type="text" placeholder="Enter your first message" />
          </div>
          <div className="input-group">
            <label>System Prompt</label>
            <textarea className='textarea-element' placeholder="This is a blank template with minimal defaults, you can change the model, temperature, and messages."></textarea>
          </div>
          <div className="input-group">
            <label>Provider</label>
            <select>
              <option value="openai">OpenAI</option>
              <option value="openai">together-ai</option>
              <option value="openai">anyscale</option>
              <option value="openai">openrouter</option>
              <option value="openai">groq</option>
              <option value="openai">antropic</option>
              <option value="openai">custom-llp</option>
            </select>
          </div>
          <div className="input-group">
            <label>Model</label>
            <select>
            <option value="gpt-3.5-turbo-cluster">GPT 4o Cluster</option>
              <option value="gpt-3.5-turbo-cluster">GPT 3.5 Turbo Cluster</option>
              <option value="gpt-3.5-turbo-cluster">GPT 4 Turbo Cluster</option>
            </select>
          </div>
          <div className="input-group">
            <label>Knowledge Base</label>
            <select>
              <option value="">Select Files</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusDashboard;




