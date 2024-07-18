import React, { useState } from 'react';
import './index.css';

const CreateAssistantModal = ({ isOpen, onClose,onClickCreateAssistantButton }) => {
  const [assistantName, setAssistantName] = useState('New Assistant');
  const [activeAssistant , setActiveAssistant] = useState("blank")
  

  const onClickBlank = () => {
    setActiveAssistant("blank")
  }
  const onClickAppointmentSetter = () => {
    setActiveAssistant("appointmentSetter")
  }
  const onClickCustomerSupport = () => {
    setActiveAssistant("customerSupport")
  }
  const onClickInbound = () => {
    setActiveAssistant("inbound")
  }
  const onClickGame = () => {
    setActiveAssistant("game")
  }

  const onClickCreateButton = () => {
    onClickCreateAssistantButton(activeAssistant,assistantName)
    setAssistantName('New Assistant')
    setActiveAssistant("blank")
  }


  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className='main-heading'>Create your Assistant</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className='chosse-a-template-container'>
            <p className='choose-heading'>Choose a template</p>
            <p className='choose-para'>Here's a few templates to get you started, or you can create your own template and use it to create a new assistant.</p>
          </div>
          <label className="label-assistant-name" htmlFor="assistant-name">Assistant Name <span className='span-element'>(This can be adjusted at any time after creation.)</span></label>
          <input
            id="assistant-name"
            className="input-create-assistant-model"
            type="text"
            value={assistantName}
            onChange={(e) => setAssistantName(e.target.value)}
          />
          <div className="template-options">
            <div className={`template-option ${ activeAssistant==="blank" && "active-assistant"}`} onClick={onClickBlank}>
              <h3 className='options-heading'>Blank Template</h3>
              <p className='options-para' >This blank slate template with minimal configurations. It's a starting point for creating your custom assistant.</p>
            </div>
            <div className="quickstart-options">
              <h3 className='quick-staet-heading'>QUICKSTART</h3>
              <div className='detail-quick-start-container'>
                <div className='detail-q-s-container'> 
                  <div className={`quickstart-option ${ activeAssistant==="appointmentSetter" && "active-assistant"}`} onClick={onClickAppointmentSetter}>
                    <h4 className='options-heading'>Appointment Setter</h4>
                    <p className='options-para'>Appointment setter is designed for dental practices to demonstrate Appointment setting assistant. It streamlines appointment scheduling, answers common questions, and provides service information.</p>
                  </div>
                  <div className={`quickstart-option ${ activeAssistant==="customerSupport" && "active-assistant"}`} onClick={onClickCustomerSupport}>
                    <h4 className='options-heading'>Customer Support</h4>
                    <p className='options-para'>This is a versatile assistant template, designed with a perfect mix of emotional intelligence and technical knowledge. Ideal for empathetic, efficient customer support.</p>
                  </div>  
                  <div className={`quickstart-option ${ activeAssistant==="inbound" && "active-assistant"}`} onClick={onClickInbound}>
                    <h4 className='options-heading'>Inbound Q/A</h4>
                    <p className='options-para'>This is an inbound call agent designed to provide comprehensive support for SmartHome Innovations. With a deep understanding of product details and troubleshooting.</p>
                  </div>
                </div>
                <div>
                 
                  <div className={`quickstart-option ${ activeAssistant==="game" && "active-assistant"}`} onClick={onClickGame}>
                    <h4 className='options-heading'>Game NPC</h4>
                    <p className='options-para'>This is an assistant for demonstrating an in-game NPC, She is designed to offer guidance, lore, and insights into the mysteries of the natural world.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className='button-container'>
              <button onClick={onClickCreateButton} type="button" className='create-ass-button'>Create Assistant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssistantModal;