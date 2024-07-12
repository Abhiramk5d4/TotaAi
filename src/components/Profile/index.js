import { MdAccountBox } from "react-icons/md";
import React from 'react';
import './index.css';

function PhoneNumber() {
  return (
    <div className="account-container">
      <div className="account-container-section">
        <MdAccountBox className="profile-iimage"/>
        <h1 className="profile-heading">Account</h1>
      </div>
      <div className="password-chnage-container">
        <div className="setting-container">
            <h1 className="setting-ele">Settings</h1>
            <p className="setting-para">Customize your account details.</p>
        </div>
        <div className="password-reset-containaer">
            <p className="side">Email</p>
            <p className="email">abhiramkolli6@gmail.com</p>
            <p className="side">New Password</p>
            <input type="password" className="input-password" />
            <div className="button-con"><button className="reset-button">Update New Password</button></div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumber;