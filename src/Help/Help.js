import React from 'react';
import './Help.css'
import SideBar from '../SideBar/SideBar';

const Help = () => {
  return (
    <div className="help">
        <SideBar></SideBar>
      <h2>Help & Support</h2>
      <h3>Frequently Asked Questions</h3>
      <ul>
        <li>
          <strong>How do I add a new expense?</strong>
          <p>Go to the 'Expense' section and click on 'Add Expense'. Fill in the details and submit.</p>
        </li>
        <li>
          <strong>How can I view my transaction history?</strong>
          <p>Click on 'History' in the sidebar to see all your past transactions.</p>
        </li>
        <li>
          <strong>How can I change my settings?</strong>
          <p>Navigate to 'Settings' to update your preferences and account information.</p>
        </li>
      </ul>
      <h3>Contact Us</h3>
      <p>If you need further assistance, please reach out to support@traex.com.</p>
    </div>
  );
}

export default Help;
