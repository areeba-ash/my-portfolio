import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Gaming Store Website',
      image: '/images/project1-image1.png',
      },
    {
      title: ' Insurance agency management system',
      image: '/images/project2-image2.png',
      },
      {
        title: ' Real State Website',
        image: '/images/project3.png',
        },
        {
          title: 'Law Firm Website',
          image: '/images/law.png',
          },
          // {
          //   title: 'Business Website',
          //   image: '/images/project5.png',
          //   },
          //   {
          //     title: '',
          //     image: '/images/game.png',
          //     },
    // Add more projects as needed
  ];

  return (
    <section className="projects-container">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-box">
            <img src={process.env.PUBLIC_URL + project.image} alt={`Project ${index + 1}`} />
            <div className="project-details">
              <p className="project-title">{project.title}</p>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
