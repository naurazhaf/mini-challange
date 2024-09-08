import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPiggyBank, faFileInvoiceDollar, faGraduationCap, faHeadphones, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Wallets */}
      <div className="section wallets-section">
        <div className="section-header">
          <h3>Wallets</h3>
          <button className="add-btn">+</button>
        </div>
        <div className="wallet-item">
          <div className="icon-wrapper purple-bg">
            <FontAwesomeIcon icon={faWallet} className="item-icon" />
          </div>
          <div className="details">
            <p className="title">Home Wallet</p>
            <p className="amount">$235,000</p>
          </div>
        </div>
        <div className="wallet-item">
          <div className="icon-wrapper orange-bg">
            <FontAwesomeIcon icon={faPiggyBank} className="item-icon" />
          </div>
          <div className="details">
            <p className="title">Investment</p>
            <p className="amount">$875,000</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="section categories-section">
        <div className="section-header">
          <h3>Categories</h3>
          <button className="add-btn">+</button>
        </div>
        <div className="category-item">
          <div className="icon-wrapper green-bg">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="item-icon" />
          </div>
          <div className="details">
            <p className="title">Bills</p>
            <p className="amount">$235,000</p>
          </div>
        </div>
        <div className="category-item">
          <div className="icon-wrapper yellow-bg">
            <FontAwesomeIcon icon={faGraduationCap} className="item-icon" />
          </div>
          <div className="details">
            <p className="title">Education</p>
            <p className="amount">$125,000</p>
          </div>
        </div>
        <div className="category-item">
          <div className="icon-wrapper pink-bg">
            <FontAwesomeIcon icon={faHeadphones} className="item-icon" />
          </div>
          <div className="details">
            <p className="title">Utility</p>
            <p className="date">25 April</p>
          </div>
        </div>
        <div className="category-item">
          <div className="icon-wrapper blue-bg">
            <FontAwesomeIcon icon={faShoppingBag} className="item-icon" />
          </div>
          <div className="details">
            <p className="title">Shopping</p>
            <p className="date">25 April</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
