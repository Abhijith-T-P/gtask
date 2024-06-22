import React, { useState, useEffect } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  DoughnutController,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './AnalyticsPage.css';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  DoughnutController,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const [loading, setLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState({
    completedProjects: 0,
    inProgressProjects: 0,
    pendingProjects: 0,
    todayHours: 0,
    last7DaysHours: [],
    totalTodos: 0,
    completedTodos: 0,
  });

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setAnalyticsData({
        completedProjects: 8,
        inProgressProjects: 2,
        pendingProjects: 5,
        todayHours: 8,
        last7DaysHours: [8, 7.5, 8, 6, 7, 8, 5], // Dummy data for last 7 days
        totalTodos: 20, // Replace with actual total todos count
        completedTodos: 15, // Replace with actual completed todos count
      });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  const totalProjects =
    analyticsData.completedProjects +
    analyticsData.inProgressProjects +
    analyticsData.pendingProjects;

  const doughnutData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        data: [
          analyticsData.completedProjects,
          analyticsData.inProgressProjects,
          analyticsData.pendingProjects,
        ],
        backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
        hoverBackgroundColor: ['#45a049', '#e68a00', '#e31b0c'],
      },
    ],
  };

  const lineData = {
    labels: [
      '6 days ago',
      '5 days ago',
      '4 days ago',
      '3 days ago',
      '2 days ago',
      '1 day ago',
      'Today',
    ],
    datasets: [
      {
        label: 'Working Hours',
        data: analyticsData.last7DaysHours,
        fill: false,
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
      },
    ],
  };

  return (
    <div className="analytics-page">
      <h1>Analytics</h1>
      <div className="cards-container">
        <div className="card">
          <h3>Total Projects</h3>
          <p>{totalProjects}</p>
        </div>
        <div className="card">
          <h3>Total Todos</h3>
          <p>{analyticsData.totalTodos}</p>
        </div>
        <div className="card">
          <h3>Completed Todos</h3>
          <p>{analyticsData.completedTodos}</p>
        </div>
        <div className="card">
          <h3>Today's Hours</h3>
          <p>{analyticsData.todayHours}</p>
        </div>
      </div>
      <div className="charts-container">
        <div className="chart">
          <h2>Project Overview</h2>
          <Doughnut data={doughnutData} />
        </div>
        <div className="chart">
          <h2>Last 7 Days Working Hours</h2>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
