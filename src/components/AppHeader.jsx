import React from 'react';
import './AppHeader.css';  
import walletLogo from '../assets/wallet-logo.jpg'; 

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={walletLogo} alt="Wallet Logo" />        
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <nav className="nav-links">
        <a href="#">Overview</a>
        <a href="#">Finance</a>
        <a href="#">Calendar</a>
        <a href="#">Events</a>
      </nav>
      <div className="user-icon"> 
        <img src="path-to-user-image.jpg" alt="User" />
      </div>
    </header>
  );
};

export default AppHeader;
