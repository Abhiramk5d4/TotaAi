import React from 'react';
import './index.css';

function PhoneNumber() {
  return (
    <div className="assistants-container">
      <div className="create-phone-container">
        <div className="buttons-container">
          <button className="button-phone hover">Buy Number #</button>
          <button className="button-phone hover">Import +</button>
        </div>
        <p className="number-text">Please add Card Details to Buy a Number</p>
      </div>
      <div className="no-assistants">
        <h2>No Phone Numbers Found</h2>
        <p>Add a phone number and connect it to an assistant to get started.</p>
      </div>
    </div>
  );
}

export default PhoneNumber;