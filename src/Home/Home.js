import React, { useContext, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { History } from '../Configuration/Configuration'; // Import the context
import SideBar from '../SideBar/SideBar';
import HistoryComponent from '../History/TransactionHistory'; // Assuming History is now renamed to HistoryComponent

function Home() {
  const { data, SetData } = useContext(History); // Use the context
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });
  const navigate = useNavigate();

  const addExpense = () => {
    if (newExpense.name.trim() !== '' && newExpense.amount.trim() !== '') {
      SetData([...data, newExpense]); // Update the context with new expense
      setNewExpense({ name: '', amount: '' }); // Reset input fields
    }
  };

  const removeExpense = (index) => {
    SetData(data.filter((_, i) => i !== index)); // Remove expense from context
  };

  const handleAdd = () => {
    navigate("/CompA");
  };

  return (
    <div className="b">
      <SideBar />
      <div className="expense-tracker-container">
        <h1>Expense Tracker</h1>

        <div className="expense-inputs">
          <input
            type="text"
            value={newExpense.name}
            onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
            placeholder="Enter expense name"
          />
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
            placeholder="Enter amount"
          />
          <button onClick={addExpense}>Add Expense</button>
        </div>

        {/* <HistoryComponent expenses={data} onRemove={removeExpense} /> Pass expenses to HistoryComponent */}
        <ul className="history-list">
          {data.map((expense, index) => (
            <li key={index} className="expence-item">
              <span>{expense.name}</span> <span>${expense.amount}</span>
              <button onClick={() => removeExpense(index)}>Remove</button>
            </li>
          ))}
        </ul>
        {/* <button onClick={handleAdd}>Count</button> */}
      </div>
    </div>
  );
}

export default Home;
