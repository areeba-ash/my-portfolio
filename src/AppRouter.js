import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import HeaderPage from './pages/HeaderPage';
import AboutMePage from './pages/AboutmePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

const AppRouter = () => {
  const navigateToSection = (sectionId) => {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

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

      Navigation Links
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        {/* <ScrollLink
          to="about"
          smooth={true}
          duration={800}
          onClick={() => navigateToSection('about')}
        >
          About
        </ScrollLink> */}
        {/* <ScrollLink
          to="skills"
          smooth={true}
          duration={800}
          onClick={() => navigateToSection('skills')}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={800}
          onClick={() => navigateToSection('projects')}
        >
          Projects
        </ScrollLink> */}
        {/* <ScrollLink
          to="contact"
          smooth={true}
          duration={800}
          onClick={() => navigateToSection('contact')}
        >
          Contact
        </ScrollLink> */}
      </div>
      
  
    
    </Router>
    
  );
};

export default AppRouter;
