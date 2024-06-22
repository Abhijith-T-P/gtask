import React, { useState } from 'react';
import './ProjectStatusPage.css';

const ProjectStatusPage = () => {
  const [projects, setProjects] = useState([
    { name: 'Project A', status: 'Not Started', hours: 0 },
    { name: 'Project B', status: 'In Progress', hours: 0 },
    { name: 'Project C', status: 'Completed', hours: 0 },
  ]);
  const [selectedProject, setSelectedProject] = useState('');
  const [status, setStatus] = useState('');
  const [hours, setHours] = useState('');

  const handleProjectChange = (e) => {
    const projectName = e.target.value;
    setSelectedProject(projectName);
    const project = projects.find(p => p.name === projectName);
    setStatus(project ? project.status : '');
    setHours(project ? project.hours : '');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedProjects = projects.map(project => 
      project.name === selectedProject
        ? { ...project, status, hours: parseFloat(hours) }
        : project
    );
    setProjects(updatedProjects);
    setSelectedProject('');
    setStatus('');
    setHours('');
  };

  return (
    <div className="project-status-page">
      <h1>Project Status</h1>
      <form onSubmit={handleUpdate} className="project-form">
        <label>
          Select Project:
          <select value={selectedProject} onChange={handleProjectChange} required>
            <option value="">--Select Project--</option>
            {projects.map((project, index) => (
              <option key={index} value={project.name}>{project.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">--Select Status--</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <br />
        <label>
          Worked Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update Project</button>
      </form>
      <h2>Project Overview</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <span>{project.name}</span>
            <span>Status: {project.status}</span>
            <span>Worked Hours: {project.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectStatusPage;
