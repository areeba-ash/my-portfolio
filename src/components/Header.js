
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="top-section">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/areeba-ash-a25bb2248/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/reeba_ash/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="contact-info">
          <p>Email: abc@gmail.com</p>
          <p>Phone: +1 3485563551</p>
        </div>
      </div>
      <div className="bottom-section">
        <h1>My Portfolio Website</h1>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
