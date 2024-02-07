// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Change 'Switch' to 'Routes'
import HeaderPage from './pages/HeaderPage';
import AboutMePage from './pages/AboutmePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
       <HeaderPage />
       <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/header" element={<HeaderPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
