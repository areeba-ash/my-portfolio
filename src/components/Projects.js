// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>My Projects</h2>

      <div className="project-item">
      <div>
      <img src={process.env.PUBLIC_URL + '/images/project1-image1.png'} alt="Project 1" />
      <img src={process.env.PUBLIC_URL + '/images/project1-image4.png'} alt="Project 2" />
      <img src={process.env.PUBLIC_URL + '/images/project1-image2.png'} alt="Project 2" />
      <img src={process.env.PUBLIC_URL + '/images/project1-image3.png'} alt="Project 2" />
      {/* Add more images as needed */}
    </div>
        <div className="project-details">
          <h3 className="project-title">Project 1: Introducing my Gaming Store Project</h3>
          <p className="project-description">
          I am thrilled to announce my latest project – a state-of-the-art gaming store, engineered using the powerhouse technology, React.js.
          gaming store interface.
          My project utilizes the power of React.js for fast, reliable, and intuitive user experiences. As an open-source JavaScript library, React.js is renowned for its efficiency, scalability and simplicity. It's the technology of choice for some of the world’s leading applications.
Here's a quick overview of the technologies incorporated:
React.js: Our primary framework, providing a smooth gaming store experience.
Redux: Managing the state of your application, ensuring consistent performance.
React Router: Enabling seamless navigation throughout our gaming store.
Webpack: Optimizing code bundling, for quick load times and a seamless user experience.
Babel: Ensuring our application remains cross-compatible, across different browsers.

My gaming store project has been crafted with meticulous attention to detail. It promises to provide an easy to navigate, visually appealing, and user-friendly interface that will keep gamers coming back for more.
Stay tuned for more updates on our groundbreaking project!
#GamingStore #ReactJs #WebDevelopment #Redux #ReactRouter #Webpack #Babel #UserExperience

          </p>
          <div className="project-links">
            <a href="project1-demo-link" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href="project1-repo-link" target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </div>
        </div>
      </div>

      <div className="project-item">
      
      <div>
      <img src={process.env.PUBLIC_URL + '/images/project2-image1.png'} alt="Project 1" />
      <img src={process.env.PUBLIC_URL + '/images/project2-image2.png'} alt="Project 2" />
      <img src={process.env.PUBLIC_URL + '/images/project2-image3.png'} alt="Project 2" />
      <img src={process.env.PUBLIC_URL + '/images/project2-image4.png'} alt="Project 2" />
      {/* Add more images as needed */}
    </div>
        <div className="project-details">
          <h3 className="project-title">Project 2: Insurance agency management system</h3>
          <p className="project-description">
          <p>
  The Insurance Management System is a comprehensive web application designed to streamline and enhance the management of insurance-related processes.
  Built using Laravel for the backend and React.js for the frontend, this system offers a modern and intuitive user interface for efficient navigation and data management.
</p>

<p>
  <strong>Key Features:</strong>
  - User Authentication and Authorization: Secure user authentication with hashed passwords and session management. Role-based access control to ensure data privacy and security.
  - Policy Management: Create, update, and delete insurance policies seamlessly. Categorize policies based on types, such as life insurance, health insurance, and property insurance.
</p>


<p>
  <strong>Technologies Used:</strong><br />
  - Backend: Laravel PHP Framework<br />
  - Frontend: React.js<br />
  - Database: MySQL<br />
  - Authentication: Laravel Passport<br />
  - State Management: Redux<br />
  - Styling: CSS-in-JS (Styled Components)
</p>

<p>
  <strong>Project Highlights:</strong>
  - Responsive Design: Ensure a seamless user experience across devices, from desktops to mobile devices.
  - Scalability: Build a scalable architecture to accommodate future enhancements and increased user load.
  - Intuitive User Interface: Create an easy-to-use interface for efficient navigation and data management.
</p>

          </p>
          <div className="project-links">
            <a href="project2-demo-link" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href="project2-repo-link" target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </div>
        </div>
      </div>

      {/* Add more project items as needed */}
    </section>
  );
};

export default Projects;
