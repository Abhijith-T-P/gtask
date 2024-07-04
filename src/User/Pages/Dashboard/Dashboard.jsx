import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonth(new Date().getMonth());
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [5, 7, 6, 8, 5, 3, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Demo data for First Floor Checklist
  const firstFloorRooms = [
    { name: 'MASTER BED + DRESSING + BATH', completed: true },
    { name: 'GUEST ROOM + BATH + BALCONY', completed: true },
    { name: 'SHEZAD ROOM & BATH', completed: false },
    { name: 'RANIAS ROOM & BATH', completed: false },
    { name: 'CORRIDOR, STAIRS & LIVING HALL', completed: true },
  ];

  // Demo data for Outdoor Maintenance
  const outdoorTasks = [
    { name: 'Paveyard & window', completed: true },
    { name: 'Pool cleaning', completed: false },
    { name: 'Pest control', completed: true },
    { name: 'AC&chiller service', completed: false },
    { name: 'Water Tank service', completed: true },
  ];

  // Demo data for Residence Cleaning
  const residenceTasks = [
    { name: 'MAIN DINING + BREAKFAST DINING', completed: true },
    { name: 'MAIN KITCHEN + SHOW KITCHEN', completed: true },
    { name: 'SALOON + OFFICE + ENTRANCE TOILET', completed: false },
    { name: 'MAID ROOM + LAUNDRY ROOM', completed: true },
    { name: 'OUT DOOR TILES + GRILL STATION', completed: false },
  ];

  const completedTasks = firstFloorRooms.filter(room => room.completed).length + 
                         outdoorTasks.filter(task => task.completed).length + 
                         residenceTasks.filter(task => task.completed).length;
  
  const totalTasks = firstFloorRooms.length + outdoorTasks.length + residenceTasks.length;

  const pieData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Tasks Completed Today',
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Maintenance Dashboard</h1>
      <h2>{currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
      
      <div className="top-row">
        <div className="card">
          <h3>Weekly Task Completion</h3>
          <Line data={lineData} />
        </div>
        <div className="card highlight-card">
          <h3>Tasks Completed Today</h3>
          <div className="pie-chart-container">
            <Pie data={pieData} options={pieOptions} />
          </div>
          <p className="task-summary">{completedTasks} out of {totalTasks} tasks completed</p>
        </div>
      </div>
      
      <div className="middle-row">
        <div className="card">
          <h3>First Floor Checklist</h3>
          <ul className="task-list">
            {firstFloorRooms.map((room, index) => (
              <li key={index} className={room.completed ? 'completed' : ''}>
                {room.name}
                {room.completed ? ' ✓' : ''}
              </li>
            ))}
          </ul>
          <Link to="/FirstFloorChecklist" className="view-more">View Full Checklist</Link>
        </div>
        <div className="card">
          <h3>Outdoor Maintenance ({months[currentMonth]})</h3>
          <ul className="task-list">
            {outdoorTasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                {task.name}
                {task.completed ? ' ✓' : ''}
              </li>
            ))}
          </ul>
          <Link to="/OutdoorMaintenance" className="view-more">View Full Checklist</Link>
        </div>
      </div>
      
      <div className="bottom-row">
        <div className="card">
          <h3>Residence Cleaning</h3>
          <ul className="task-list">
            {residenceTasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                {task.name}
                {task.completed ? ' ✓' : ''}
              </li>
            ))}
          </ul>
          <Link to="/ResidentCleaningChecklist" className="view-more">View Full Checklist</Link>
        </div>
        <div className="card">
          <h3>To Do</h3>
          <ul className="task-list">
            <li>Complete Shezad Room & Bath cleaning</li>
            <li>Perform Pool cleaning</li>
            <li>Service AC & chiller</li>
            <li>Clean Saloon + Office + Entrance Toilet</li>
            <li>Clean Outdoor Tiles + Grill Station</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;