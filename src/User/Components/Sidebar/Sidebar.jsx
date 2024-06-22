import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

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
        <li><Link to='./'>Dashboard</Link> </li>
        <li><Link to='./AnalyticsPage'>Analytics</Link> </li>
        <li><Link to='./Timesheet'>Timesheets</Link> </li>
        <li><Link to='./ProjectStatusPage'>ProjectStatusPage</Link> </li>
        <li><Link to='./ToDoPage'>Todo</Link> </li>
        <li><Link to='./ReportPage'>Report</Link> </li>
        <li><Link to='./SettingsPage'>Settings</Link> </li>
        
      </ul>
    </nav>
    
  </div>
);

export default Sidebar;
