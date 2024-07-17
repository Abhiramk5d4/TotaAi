import React from 'react';
import './index.css';
import  { useState } from 'react';
import PersonalityTab from "../PersonalityTab"
import KnowledgeTab from "../KnowledgeTab"
import ModelTab from "../ModelTab"

function StatusDashboard() {

  const [activeTab , setTab] = useState("personality")

  const onClickPersonality = () => {
      setTab("personality")
  }
  const onClickKnowledge = () => {
    setTab("knowledge")
}
const onClickAction = () => {
  setTab("action")
}
const onClickModel = () => {
  setTab("model")
}
const onClickTranscriber = () => {
  setTab("transcriber")
}
const onClickVoice = () => {
  setTab("voice")
}

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
                <button className="tab" onClick={onClickPersonality}>Personality</button>
                <button className="tab" onClick={onClickKnowledge}>Knowledge</button>
                <button className="tab" onClick={onClickAction}>Action</button>
            </div>
            <div className='tabs-detail-container'>
                <button className="tab" onClick={onClickModel}>Model</button>
                <button className="tab" onClick={onClickTranscriber}>Transcriber</button>
                <button className="tab" onClick={onClickVoice}>Voice</button>
            </div>
        </div>

        <div className="metrics">
          <div className="metric">
              <div className='metric-scale'> 
                <span className="label">Cost</span>
                <span className="value">$0.08 /min</span>
              </div>
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

      {
        activeTab === "personality" && (<PersonalityTab />)
      }
      {
        activeTab === "knowledge" && (<KnowledgeTab />)
      }
      {
        activeTab === "action" && (<></>)
      }
      {
        activeTab === "model" && (<ModelTab />)
      }
      {
        activeTab === "transcriber" && (<></>)
      }
      {
        activeTab === "voice" && (<></>)
      }
    </div>
  );
}

export default StatusDashboard;




