import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  // State hooks for various settings
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [currency, setCurrency] = useState('USD');
  const [notifications, setNotifications] = useState(true);

  // Handlers for updating settings
  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleCurrencyChange = (e) => setCurrency(e.target.value);
  const handleNotificationsToggle = () => setNotifications(!notifications);

  return (
    <div className={`settings ${theme}`}>
      <h2>Settings</h2>
      <div className="setting-item">
        <label htmlFor="theme">Theme:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="setting-item">
        <label htmlFor="currency">Default Currency:</label>
        <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="JPY">JPY - Japanese Yen</option>
        </select>
      </div>
      <div className="setting-item">
        <label>Notifications:</label>
        <button onClick={handleNotificationsToggle}>
          {notifications ? 'Disable' : 'Enable'}
        </button>
      </div>
    </div>
  );
};

export default Settings;



