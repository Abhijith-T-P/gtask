import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => (
  <div className="dashboard">
    <div className="top-row">
      <div className="card">
        <h3>Weekly Activity</h3>
        <p>0%</p>
      </div>
      <div className="card">
        <h3>Worked This Week</h3>
        <p>40:00:05</p>
      </div>
      <div className="card">
        <h3>Project Worked</h3>
        <p>02</p>
      </div>
    </div>
    <div className="middle-row">
      <div className="card">
        <h3>Recent Activity</h3>
        <div className="activity-images">
          {/* Add image elements here */}
        </div>
      </div>
      <div className="card">
        <h3>Projects</h3>
        <ul>
          <li>Project One - 0:04:00</li>
          <li>Project Two - 0:03:00</li>
          <li>Project Three - 0:03:00</li>
          <li>Project Four - 0:03:00</li>
        </ul>
      </div>
    </div>
    <div className="bottom-row">
      <div className="card">
        <h3>Members</h3>
        <ul>
          <li>John Ekolor - 08:40:00</li>
          <li>Rubik Sans - 08:00:00</li>
        </ul>
      </div>
      <div className="card">
        <h3>To Do</h3>
        <ul>
          <li>Creating Wireframe - 0:03:00</li>
          <li>Research Development - 0:02:00</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dashboard;
