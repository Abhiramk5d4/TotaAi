import React from 'react';
import './index.css';

const KnowledgeTab = () => {
  return (
    <div className="model-section">
      <div className="section">
        <h2 className="section-heading">AGENT PROMPT</h2>
        <p className="section-description">
          Give instructions to your AI about how it should behave and interact with others in conversation.
        </p>
        <textarea className="input" rows="6" placeholder="e.g. You are a customer support agent. You will try to respond to the user’s questions with the best answers given your knowledge. You will never make up information." ></textarea>
      </div>

      <div className="section">
        <h2 className="section-heading">CUSTOM KNOWLEDGE</h2>
        <p className="section-description">
          Add your custom knowledge to your agent.
        </p>
        <textarea className="input" rows="6" placeholder="i.e. The more specialized knowledge and information your agent has, the closer to your expectations they will perform. If you’re using an agent for Business, upload things like Business Hours, Answers to Frequently Asked Questions, Customer Service Policies, etc."></textarea>
      </div>
      <div className="upload-section">
        <button className="upload-button">Upload knowledge files</button>
        <p className="upload-description">
          Upload PDFs, FAQs, Epub, .Txt... most file types work. <a href="#">see full list</a>
        </p>
      </div>
      <div className="guardrails-section">
        <h2 className="section-heading">GUARDRAILS</h2>
        <p className="section-description">
          Force the agent to reply using only content from the knowledge base instead of general knowledge?
        </p>
        <div className="checkbox-wrapper">
          <input type="checkbox" id="guardrails-checkbox" className="checkbox" />
          <label htmlFor="guardrails-checkbox">Yes, only provide answers from knowledge base.</label>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeTab;

