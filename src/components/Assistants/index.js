import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import CreateAssistantModal from '../CreateAssistantModal'; // Assuming this is your modal component
import './index.css'; // Example CSS for Assistants component
import StatusDashboard from '../StatusDashboard';

function Assistants() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeAssistants, setActiveAssistant] = useState([])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickCreateAssistantButton = (activeAssistant,assistantName) => {
    setIsModalOpen(false);
    let assistantDetails = {
      id : uuidv4(),
      name : assistantName,
      activeAssistant,
      isActive: false,
    }
    setActiveAssistant(prev => [...prev,assistantDetails])
  }

  return (
    <div className="assistants-container">
      <div className="create-assistant-container">
        <div className='createbutton-container'>
          <button className="button-assistant hover" onClick={openModal}>
            Create Assistant +
          </button>
        </div>
        {activeAssistants.map(each => (
          <div className='newAssistant-container'>
            <h1 className='assistant-name'>{each.name}</h1>
            <p className='copy-link'>248be419-c632-4f23-adf1-5324ed7dbf1d</p>
        </div>
        ))}
      </div>
      <div className='side-container'>
        {activeAssistants.length === 0 ? (
          <div className="no-assistants">
            <h2>No Assistants Found</h2>
            <p>Create a new assistant to get started with your first conversation.</p>
          </div>) :( 
            <StatusDashboard />
        ) }
      </div>
      
     
      <CreateAssistantModal onClickCreateAssistantButton={onClickCreateAssistantButton} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Assistants;