import React from 'react';
import './index.css';

const ModelTab = () => {
  return (
    
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
  );
};

export default ModelTab;






