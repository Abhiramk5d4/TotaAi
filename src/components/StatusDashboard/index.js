import React from 'react';
import './index.css';
import  { useState } from 'react';
import PersonalityTab from "../PersonalityTab"
import KnowledgeTab from "../KnowledgeTab"
import ModelTab from "../ModelTab"
import CreateCallPopup from "../CreateCallPopup"
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

function StatusDashboard() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const dataOfPie = [
    {
    "count": 80820,
    "gender": "Male"
  },{
    "count": 80968,
    "gender": "Female"
  },{
    "count": 199680,
    "gender": "Others"
  },]

  const openCallModal = () => {
    setIsCallModalOpen(true);
  };

  const closeCallModal = () => {
    setIsCallModalOpen(false);
  };

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
        <button className="talk-button" onClick={openCallModal}>Talk with Abhi</button>
        <CreateCallPopup  isOpen={isCallModalOpen} onClose={closeCallModal} />
        
      </div>

      

      <div className="tabs">
        <div className='tabs-container'>
            <div className='tabs-detail-container'>
                <button className={`tab ${activeTab === "personality" && "active-tab-item"}`} onClick={onClickPersonality}>Personality</button>
                <button className={`tab ${activeTab === "knowledge" && "active-tab-item"}`} onClick={onClickKnowledge}>Knowledge</button>
                <button className={`tab ${activeTab === "action" && "active-tab-item"}`} onClick={onClickAction}>Action</button>
            </div>
            <div className='tabs-detail-container'>
                <button className={`tab ${activeTab === "model" && "active-tab-item"}`} onClick={onClickModel}>Model</button>
                <button className={`tab ${activeTab === "transcriber" && "active-tab-item"}`} onClick={onClickTranscriber}>Transcriber</button>
                <button className={`tab ${activeTab === "voice" && "active-tab-item"}`} onClick={onClickVoice}>Voice</button>
            </div>
        </div>

        <div className="metrics">
          <div className="metric">
              <div className='metric-scale'> 
                <span className="label">Cost</span>
                <span className="value">$0.08 /min</span>
              </div>
               <ResponsiveContainer width="100%" height={180}>
            <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={dataOfPie}
              startAngle={360}
              endAngle={0}
              innerRadius="30%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Tota Fixed Cost" fill="#f54394" />
              <Cell name="DeepGram" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
          </ResponsiveContainer>
          </div>
          <div className="metric">
              <div className='metric-scale'>
                <span className="label">Latency</span>
                <span className="value">700 ms</span>
              </div>
              <ResponsiveContainer width="100%" height={180}>
            <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={dataOfPie}
              startAngle={360}
              endAngle={0}
              innerRadius="30%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Tota Fixed Cost" fill="#f54394" />
              <Cell name="DeepGram" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
          </ResponsiveContainer>
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




