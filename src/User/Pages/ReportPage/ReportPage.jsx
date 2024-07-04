import React, { useState } from 'react';
import './ReportPage.css';

const ReportPage = () => {
  const [customDate, setCustomDate] = useState('');
  const [customReport, setCustomReport] = useState(null);

  // Mock data generator function
  const generateMockData = (date) => {
    const rooms = [
      'MASTER BED + DRESSING + BATH',
      'GUEST ROOM + BATH + BALCONY',
      'SHEZAD ROOM & BATH',
      'RANIAS ROOM & BATH',
      'CORRIDOR, STAIRS & LIVING HALL',
    ];
    const outdoorTasks = [
      'Paveyard & window',
      'Pool cleaning',
      'Pest control',
      'AC&chiller service',
      'water Tank service',
    ];

    return {
      date: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      firstFloor: {
        completedRooms: rooms.filter(() => Math.random() > 0.3),
        totalRooms: rooms,
      },
      outdoor: {
        completedTasks: outdoorTasks.filter(() => Math.random() > 0.5),
        totalTasks: outdoorTasks,
      },
    };
  };

  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    return generateMockData(date);
  });

  const handleCustomSearch = (e) => {
    e.preventDefault();
    const searchDate = new Date(customDate);
    if (!isNaN(searchDate.getTime())) {
      setCustomReport(generateMockData(searchDate));
    } else {
      alert('Please enter a valid date');
    }
  };

  const TaskList = ({ completed, total, type }) => {
    const incompleteTasks = total.filter(task => !completed.includes(task));
    
    if (incompleteTasks.length === 0) {
      return <p className="all-completed">All {type} Completed</p>;
    }

    return (
      <ul className={`${type}-list`}>
        {incompleteTasks.map((task, index) => (
          <li key={index} className="incomplete">{task}</li>
        ))}
      </ul>
    );
  };

  const ReportSection = ({ data }) => (
    <div className="report-section">
      <h3>{data.date}</h3>
      <div className="report-subsection">
        <h4>First Floor Cleaning</h4>
        <p>Completed: {data.firstFloor.completedRooms.length} / {data.firstFloor.totalRooms.length} rooms</p>
        <TaskList 
          completed={data.firstFloor.completedRooms} 
          total={data.firstFloor.totalRooms}
          type="room"
        />
      </div>
      <div className="report-subsection">
        <h4>Outdoor Maintenance</h4>
        <p>Completed: {data.outdoor.completedTasks.length} / {data.outdoor.totalTasks.length} tasks</p>
        <TaskList 
          completed={data.outdoor.completedTasks} 
          total={data.outdoor.totalTasks}
          type="task"
        />
      </div>
    </div>
  );

  return (
    <div className="report-page-container">
      <h1>Maintenance Report</h1>

      <section>
        <h2>Today's Report</h2>
        <ReportSection data={last7Days[0]} />
      </section>

      <section>
        <h2>Last 7 Days</h2>
        {last7Days.slice(1).map((data, index) => (
          <ReportSection key={index} data={data} />
        ))}
      </section>

      <section>
        <h2>Custom Search</h2>
        <form onSubmit={handleCustomSearch} className="custom-search-form">
          <input
            type="date"
            value={customDate}
            onChange={(e) => setCustomDate(e.target.value)}
            required
            className="custom-search-input"
          />
          <button type="submit" className="custom-search-button">Search</button>
        </form>
        {customReport && <ReportSection data={customReport} />}
      </section>
    </div>
  );
};

export default ReportPage;