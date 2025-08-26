import React, { useContext } from 'react';
import { History } from '../Configuration/Configuration'; // Adjust the import path as needed
import './History.css';
import SideBar from '../SideBar/SideBar';

const TransactionHistory = () => {
  const { data, SetData } = useContext(History); // Get data and SetData from context

  const removeExpense = (index) => {
    SetData(data.filter((_, i) => i !== index)); // Remove expense from context
  };

  return (
    <div className="history-container">
      <SideBar></SideBar>
      <h2>Transaction History</h2>
      {data.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul className="history-list">
          {data.map((expense, index) => (
            <li key={index} className="history-item">
              <span>{expense.name}</span> <span>${expense.amount}</span>
              {/* <button onClick={() => removeExpense(index)}>Remove</button> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;
