import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faShoppingBag, faCreditCard, faGift } from '@fortawesome/free-solid-svg-icons';
import './TransactionCard.css';

const TransactionCard = ({ icon, title, date, amount }) => {
  return (
    <div className="transaction-card">
      <div className="transaction-info">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={icon} className="transaction-icon" />
        </div>
        <div className="details">
          <p className="title">{title}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <div className="transaction-actions">
        <p className="amount">{amount}</p>
        <div className="action-icons">
          <button className="bookmark-btn">🔖</button>
          <button className="delete-btn">❌</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
