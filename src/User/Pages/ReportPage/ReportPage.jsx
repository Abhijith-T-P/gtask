import React from 'react';
import './ReportPage.css';

const ReportPage = () => {
  // Sample data for demonstration purposes
  const reportData = [
    { id: 1, name: 'Project A', hours: 120, status: 'Completed' },
    { id: 2, name: 'Project B', hours: 85, status: 'In Progress' },
    { id: 3, name: 'Project C', hours: 40, status: 'Pending' },
    { id: 4, name: 'Project D', hours: 100, status: 'Completed' },
  ];

  return (
    <div className="report-page">
      <h1>Reports</h1>
      <table className="report-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name</th>
            <th>Hours</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.hours}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;
