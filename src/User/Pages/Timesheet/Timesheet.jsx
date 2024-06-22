import React, { useState } from 'react';
import './Timesheet.css';

const Timesheet = () => {
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState('');
  const [project, setProject] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && project && hours) {
      const newEntry = { date, project, hours };
      setEntries([...entries, newEntry]);
      setDate('');
      setProject('');
      setHours('');
    }
  };

  const totalHours = entries.reduce((acc, entry) => acc + parseFloat(entry.hours), 0);

  return (
    <div className="timesheet">
      <h1>Timesheet</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Project:
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
          />
        </label>
        <label>
          Hours:
          <input
            type="number"
            value={hours}
            max={18}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Entry</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Project</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.project}</td>
              <td>{entry.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Hours: {totalHours.toFixed(2)}</p>
    </div>
  );
};

export default Timesheet;
