import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
const SideBar = () => {
  return (
    <div className='sideBar'>
      <h2>TraEx</h2>
      <ul>
        <div>

        <li>
          <Link to='/history'>History</Link>
        </li>
        <li>
          <Link to='/home'>Expense</Link>
        </li>
        <li>
          <Link to='/Chart'>Chart</Link>
        </li>
        </div>
        <div className='bottom'>
        <li>
          <Link to='/settings'>Settings</Link>
        </li>
        <li>
          <Link to='/help'>Help</Link>
        </li>
        <li>
          <Link to='/'>Logout</Link>
        </li>
        </div>
      </ul>
    </div>
  );
}

export default SideBar;
