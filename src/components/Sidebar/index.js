import { Link } from 'react-router-dom'
import React, {Component} from 'react';
import { FaChartPie, FaUser, FaPhone, FaFile, FaTools, FaUsers, FaMusic, FaRegFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
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


  render(){
    const{isPlatformOpen,activeTabID} = this.state
    
    return (
      <div className="sidebar">
        <ul className="sidebar-menu">
        <Link className="nav-link" to="/overview">
          <li  className={`sidebar-item ${activeTabID==="Overview" ? "active hover" : ""}`}  onClick={this.clickOverview}>
            <FaChartPie />
            <span>Overview</span>
           </li>
        </Link>
          <li className="sidebar-item" onClick={this.togglePlatform}>
            <FaTools />
            <span>Platform</span>
            {isPlatformOpen ? <FaChevronUp /> : <FaChevronDown />}
          </li>
          {isPlatformOpen && (
            <ul className="sidebar-submenu">
              <Link className="nav-link" to="/assistants">
                <li className={`sidebar-item ${activeTabID==="Assistants" ? "active hover" : ""}`} onClick={this.clickAssistants}>
                  <FaUser />
                  <span>Assistants</span>
                </li>
              </Link>

              <Link className="nav-link" to="/phone-number">
                <li className={`sidebar-item ${activeTabID==="Phonenum" ? "active hover" : ""}`} onClick={this.clickPhonenumber}>
                  <FaPhone />
                  <span>Phone Numbers</span>
                </li>
               </Link>
              <Link className="nav-link" to="/files">
                <li className={`sidebar-item ${activeTabID==="Files" ? "active hover" : ""}`} onClick={this.clickFiles}>
                  <FaFile />
                  <span>Files</span>
                </li>
               </Link>
              <Link className="nav-link" to="/tools">
                <li className={`sidebar-item ${activeTabID==="Tools" ? "active hover" : ""}`}onClick={this.clickTools}>
                  <FaTools />
                  <span>Tools</span>
                </li>
               </Link>
              <Link className="nav-link" to="/squads">
                <li className={`sidebar-item ${activeTabID==="Squads" ? "active hover" : ""}`} onClick={this.clickSquads}>
                  <FaUsers />
                  <span>Team</span>
                </li>
               </Link>
            </ul>
          )}
          <Link className="nav-link" to="/voice-library">
            <li className={`sidebar-item ${activeTabID==="VoiceLib" ? "active hover" : ""}`} onClick={this.clickVoiceLib}>
              <FaMusic />
              <span>Voice Library</span>
            </li>
          </Link>
          <Link className="nav-link" to="/call-logs">
            <li className={`sidebar-item ${activeTabID==="CallLogs" ? "active hover" : ""}`} onClick={this.clickCalllogs}>
              <FaRegFileAlt />
              <span>Call Logs</span>
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
          <div className="profile-sidebar" >
            <FaUser className='profile-icon-image' />
            <span className="span-profile">abhiramkolli6@gmail.com</span>
          </div>
        </div>
      </div>
    );
  }
}


export default Sidebar;