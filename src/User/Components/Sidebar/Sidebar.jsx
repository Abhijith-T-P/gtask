import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => (
  <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
    <nav>
      <ul>
        <li>
          <a href="#dashboard" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e8eaed">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </a>
        </li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#timesheets">Timesheets</a></li>
        <li><a href="#todo">Todo</a></li>
        <li><a href="#report">Report</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
    <div className="profile">
      <img src="profile.jpg" alt="Profile" />
      <div className="profile-info">
        <h4>Manjay Gupta</h4>
        <p>Lead Designer</p>
      </div>
    </div>
  </div>
);

export default Sidebar;
