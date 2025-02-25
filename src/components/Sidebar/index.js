import { Link } from 'react-router-dom'
import React, {Component} from 'react';
import { FaChartPie, FaUser, FaPhone, FaFile, FaTools, FaUsers, FaMusic, FaRegFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import './index.css';


class Sidebar extends Component {
  state = {
    isPlatformOpen: false,
    activeTabID : "",
  }
  togglePlatform = () => {
    const{isPlatformOpen} = this.state
    this.setState({isPlatformOpen : !isPlatformOpen})
  };

  clickOverview = () => {
      this.setState({activeTabID : "Overview"})
  }

  clickAssistants = () => {
    this.setState({activeTabID : "Assistants"})
}
clickPhonenumber = () => {
  this.setState({activeTabID : "Phonenum"})
}
clickFiles = () => {
  this.setState({activeTabID : "Files"})
}

clickTools = () => {
  this.setState({activeTabID : "Tools"})
}

clickSquads = () => {
  this.setState({activeTabID : "Squads"})
}

clickVoiceLib = () => {
  this.setState({activeTabID : "VoiceLib"})
}

clickCalllogs = () => {
  this.setState({activeTabID : "CallLogs"})
}

clickProfile = () => {
  this.setState({activeTabID : "Account"})
}
clickSettings = () => {
  this.setState({activeTabID : "Settings"})
}


  render(){
    const{isPlatformOpen,activeTabID} = this.state
    
    return (
      <div className="sidebar">
        <ul className="sidebar-menu">
        <Link className="nav-link" to="/overview">
          <li  className={`sidebar-item ${activeTabID==="Overview" ? "active hover" : ""}`}  onClick={this.clickOverview}>
            <FaChartPie />
            <span className='side-item'>Overview</span>
           </li>
        </Link>
          <li className="sidebar-item" onClick={this.togglePlatform}>
            <FaTools />
            <span className='side-item'>Platform</span>
            {isPlatformOpen ? <FaChevronUp /> : <FaChevronDown />}
          </li>
          {isPlatformOpen && (
            <ul className="sidebar-submenu">
              <Link className="nav-link" to="/assistants">
                <li className={`sidebar-item ${activeTabID==="Assistants" ? "active hover" : ""}`} onClick={this.clickAssistants}>
                  <FaUser />
                  <span className='side-item'>Assistants</span>
                </li>
              </Link>

              <Link className="nav-link" to="/phone-number">
                <li className={`sidebar-item ${activeTabID==="Phonenum" ? "active hover" : ""}`} onClick={this.clickPhonenumber}>
                  <FaPhone />
                  <span className='side-item'>Phone Numbers</span>
                </li>
               </Link>
              <Link className="nav-link" to="/files">
                <li className={`sidebar-item ${activeTabID==="Files" ? "active hover" : ""}`} onClick={this.clickFiles}>
                  <FaFile />
                  <span className='side-item'>Files</span>
                </li>
               </Link>
              <Link className="nav-link" to="/tools">
                <li className={`sidebar-item ${activeTabID==="Tools" ? "active hover" : ""}`}onClick={this.clickTools}>
                  <FaTools />
                  <span className='side-item'>Tools</span>
                </li>
               </Link>
              <Link className="nav-link" to="/squads">
                <li className={`sidebar-item ${activeTabID==="Squads" ? "active hover" : ""}`} onClick={this.clickSquads}>
                  <FaUsers />
                  <span className='side-item'>Team</span>
                </li>
               </Link>
            </ul>
          )}
          <Link className="nav-link" to="/voice-library">
            <li className={`sidebar-item ${activeTabID==="VoiceLib" ? "active hover" : ""}`} onClick={this.clickVoiceLib}>
              <FaMusic />
              <span className='side-item'>Voice Library</span>
            </li>
          </Link>
          <Link className="nav-link" to="/call-logs">
            <li className={`sidebar-item ${activeTabID==="CallLogs" ? "active hover" : ""}`} onClick={this.clickCalllogs}>
              <FaRegFileAlt />
              <span className='side-item'>Call Logs</span>
            </li>
          </Link>
        </ul>
        <div className="sidebar-email">
        <Link className="nav-link" to="/account">
          <div className={`profile-sidebar ${activeTabID==="Account" ? "active hover" : ""}`} onClick={this.clickProfile}>
            <FaUser className='profile-icon-image' />
            <span className="span-profile">Profile</span>
          </div>
          </Link>
          <div className={`profile-sidebar ${activeTabID==="Settings" ? "active hover" : ""}`} onClick={this.clickSettings} >
            <IoSettings className='profile-icon-image' />
            <span className="span-profile">Settings</span>
          </div>
        </div>
      </div>
    );
  }
}


export default Sidebar;