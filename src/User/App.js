import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import "./Style.css";
import Timesheet from "./Pages/Timesheet/Timesheet";
import ToDoPage from "./Pages/ToDoPage/ToDoPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import ReportPage from "./Pages/ReportPage/ReportPage";
import AnalyticsPage from "./Pages/AnalyticsPage/AnalyticsPage";
import ProjectStatusPage from "./Pages/ProjectStatusPage/ProjectStatusPage";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="content">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Timesheet" element={<Timesheet />} />
            <Route path="/ToDoPage" element={<ToDoPage />} />
            <Route path="/SettingsPage" element={<SettingsPage />} />
            <Route path="/ReportPage" element={<ReportPage />} />
            <Route path="/AnalyticsPage" element={<AnalyticsPage />} />
            <Route path="/ProjectStatusPage" element={<ProjectStatusPage />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
