import { Link } from 'react-router-dom'
import React from "react";
import { FaMagic, FaCommentDots, FaLifeRing } from "react-icons/fa";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <Link className="nav-link" to="/">
        <div className="logo">
          <img className="img-logo" src="https://res.cloudinary.com/haibegwvw/image/upload/v1721307308/file_krjkgp.png"/>
          <h1 className="logo-name">TotaAi</h1>
        </div>
      </Link>
      <div className="header-buttons">
        <button className="header-button">
          <FaMagic className="icon" />
          Ask AI for help
        </button>
        <button className="header-button">
          <FaCommentDots className="icon" />
          Feedback
        </button>
        <div className="profile-icon">
          <FaLifeRing className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;