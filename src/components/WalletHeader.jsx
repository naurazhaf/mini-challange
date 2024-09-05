import React from 'react';
import './WalletHeader.css';
import walletIcon from '../assets/wallet-logo.jpg';

const WalletHeader = () => {
  return (
    <div className="wallet-header">
      <div className="wallet-info">
        <img src={walletIcon} alt="Wallet Icon" className="wallet-icon" />
        <div className="wallet-text">
          <h2>Home Wallet</h2>
        </div>
      </div>
      {/* <div className="wallet-calendar">
        <button className="calendar-btn">
          <span>Calendar</span>
          <img src="" alt="Calendar Icon" /> 
        </button>
      </div> */}
    </div>
  );
};

export default WalletHeader;
