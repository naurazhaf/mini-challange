import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPiggyBank, faFileInvoiceDollar, faGraduationCap, faLightbulb, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wallets-section">
        <h3>Wallets</h3>
        <div className="wallet-item">
          <FontAwesomeIcon icon={faWallet} className="wallet-icon" />
          <div>
            <p>Home Wallet</p>
            <span>$235,000</span>
          </div>
        </div>
        <div className="wallet-item">
          <FontAwesomeIcon icon={faPiggyBank} className="wallet-icon" />
          <div>
            <p>Investment</p>
            <span>$875,000</span>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <h3>Categories</h3>
        <div className="category-item">
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="category-icon" />
          <div>
            <p>Bills</p>
            <span>$235,000</span>
          </div>
        </div>
        <div className="category-item">
          <FontAwesomeIcon icon={faGraduationCap} className="category-icon" />
          <div>
            <p>Education</p>
            <span>$125,000</span>
          </div>
        </div>
        <div className="category-item">
          <FontAwesomeIcon icon={faLightbulb} className="category-icon" />
          <div>
            <p>Utility</p>
            <span>25 April</span>
          </div>
        </div>
        <div className="category-item">
          <FontAwesomeIcon icon={faShoppingBag} className="category-icon" />
          <div>
            <p>Shopping</p>
            <span>25 April</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
