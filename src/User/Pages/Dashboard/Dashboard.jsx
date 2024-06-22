import React from 'react';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Hours Worked',
      data: [2, 4, 3, 5, 2, 3, 4],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  const recentActivity = []; // Assuming no recent activity for now

  return (
    <div className="dashboard">
      <div className="top-row">
        <div className="card">
          <h3>Weekly Activity</h3>
          <Line data={data} />
        </div>
        <div className="card highlight-card">
          <h3>Worked This Week</h3>
          <p>40:00:05</p>
        </div>
      </div>
      <div className="middle-row">
        <div className="card highlight-card">
          <h3>Project Worked</h3>
          <p>02</p>
        </div>
        <div className="card">
          <h3>Recent Activity</h3>
          {recentActivity.length === 0 ? (
            <p>No recent activity</p>
          ) : (
            <div className="activity-images">
              {/* Add image elements here */}
            </div>
          )}
        </div>
      </div>
      <div className="bottom-row">
        <div className="card">
          <h3>Projects</h3>
          <ul className="no-decor">
            <li>Project One - 0:04:00</li>
            <li>Project Two - 0:03:00</li>
            <li>Project Three - 0:03:00</li>
            <li>Project Four - 0:03:00</li>
          </ul>
        </div>
        <div className="card">
          <h3>Members</h3>
          <ul className="no-decor">
            <li>John Ekolor - 08:40:00</li>
            <li>Rubik Sans - 08:00:00</li>
          </ul>
        </div>
        <div className="card">
          <h3>To Do</h3>
          <ul className="no-decor">
            <li>Creating Wireframe - 0:03:00</li>
            <li>Research Development - 0:02:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
