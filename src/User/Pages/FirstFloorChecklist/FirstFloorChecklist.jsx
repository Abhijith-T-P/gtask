import React from 'react';
import './FirstFloorChecklist.css';

const rooms = [
  'MASTER BED + DRESSING + BATH',
  'GUEST ROOM + BATH + BALCONY',
  'SHEZAD ROOM & BATH',
  'RANIAS ROOM & BATH',
  'CORRIDOR, STAIRS & LIVING HALL',
];

const FirstFloorChecklist = () => {
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const currentDayOfMonth = currentDate.getDate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());
    console.log(entries);
    alert('Checklist submitted for the day!');
  };

  return (
    <div className="container">
      <h1>FIRST FLOOR CLEANING CHECKLIST</h1>
      <h2>{`${currentMonth} ${currentDayOfMonth}, ${currentDay}`}</h2>
      <div className="day">
        <form onSubmit={handleSubmit}>
          <h3>{currentDay}</h3>
          <ul>
            {rooms.map((room) => (
              <li key={room}>
                <input type="checkbox" id={`${currentDay}-${room}`} name={`${currentDay}-${room}`} />
                <label htmlFor={`${currentDay}-${room}`}>{room}</label>
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="reminders">
        <h3>Daily Reminders</h3>
        <ul>
          <li>DUSTING</li>
          <li>DRY MOPPING</li>
          <li>WET MOPPING WITH DISINFECTANT</li>
          <li>VACUUMING</li>
          <li>SPOT MOPPING</li>
          <li>CHECK LIGHTS AND FANS</li>
          <li>CHECK THE TAP AND SHOWER</li>
          <li>USE CHEMICAL CAREFULLY</li>
          <li>ENSURE NO INSECTS INSIDE</li>
          <li>REPORT DEFECTS</li>
          <li>REPORT MISSING</li>
        </ul>
      </div>
    </div>
  );
};

export default FirstFloorChecklist;
