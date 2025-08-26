import React from 'react';
import Chart from './Chart';
import SideBar from '../SideBar/SideBar';

const App = () => {
  const expenseData = [
    { category: 'Food', amount: 250 },
    { category: 'Rent', amount: 800 },
    { category: 'Transport', amount: 100 },
    { category: 'Entertainment', amount: 150 },
    { category: 'Others', amount: 50 },
  ];

  return (
    <div>
      
      <h1>Expense Tracker</h1>
      <Chart data={expenseData} />
    </div>
  );
};

export default App;
