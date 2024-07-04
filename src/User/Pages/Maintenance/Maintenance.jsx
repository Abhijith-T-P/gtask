import React from 'react';
import { Link } from 'react-router-dom';
import './Maintenance.css';
const Maintenance = () => {
  return (
    <div className="container">
      <h1>Maintenance</h1>
      <div className="grid">
        <Link to="../FirstFloorChecklist" className="card">
          <h2>First Floor</h2>
        </Link>
        <Link to="../ResidentCleaningChecklist" className="card">
          <h2>Residence</h2>
        </Link>
        <Link to="../OutdoorMaintenance" className="card">
          <h2>Outdoor</h2>
        </Link>
      </div>
    </div>
  );
};

export default Maintenance;
