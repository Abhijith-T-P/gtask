import React, { useState, useEffect } from 'react';
import './OutdoorMaintenance.css';

const tasks = {
  'Paveyard & window': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  'Pool cleaning': [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  'Pest control': [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  'AC&chiller service': [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  'water Tank service': [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]
};

const months = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

const OutdoorMaintenance = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonth(new Date().getMonth());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());
    console.log(entries);
    alert('Checklist submitted for the month!');
  };

  return (
    <div className="container">
      <h1>OUTDOOR MAINTENANCE CHECKLIST</h1>
      <h2>{months[currentMonth]} 2024</h2>
      <div className="day">
        <form onSubmit={handleSubmit}>
          <h3>{months[currentMonth]} Tasks</h3>
          <ul>
            {Object.entries(tasks).map(([task, counts]) => {
              if (counts[currentMonth] === 0) return null;
              if (task === 'Pool cleaning') {
                return (
                  <li key={task}>
                    <span>{task}</span>
                    <div>
                      <label><input type="checkbox" name={`${task}-week1`} /> Week 1</label>
                      <label><input type="checkbox" name={`${task}-week2`} /> Week 2</label>
                    </div>
                  </li>
                );
              }
              return (
                <li key={task}>
                  <input type="checkbox" id={task} name={task} />
                  <label htmlFor={task}>{task}</label>
                </li>
              );
            })}
          </ul>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="reminders">
        <h3>Maintenance Reminders</h3>
        <ul>
          <li>Check for any damages or wear and tear</li>
          <li>Document any issues found during maintenance</li>
          <li>Follow safety protocols when performing tasks</li>
          <li>Use appropriate cleaning products for each area</li>
          <li>Report any major concerns to management</li>
        </ul>
      </div>
    </div>
  );
};

export default OutdoorMaintenance;