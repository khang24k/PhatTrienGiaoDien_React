import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import ProjectsPage from './pages/Projects'; // Import trang ProjectsPage
import TeamsPage from './pages/Teams';     // Import trang TeamsPage
import AnalyticsPage from './pages/Analytics'; // Import trang AnalyticsPage
import MessagesPage from './pages/Messages';  // Import trang MessagesPage
import IntegrationsPage from './pages/Integrations'; // Import trang IntegrationsPage
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />
      <Route path="/overview" element={<AdminPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/team" element={<TeamsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/integrations" element={<IntegrationsPage />} />
    </Routes>
  )
}

export default App;