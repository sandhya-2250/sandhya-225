
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Coffee Website',
      description: 'A modern coffee shop website with responsive design and interactive elements.',
      image: 'fas fa-coffee',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'http://127.0.0.1:5500/coffeeshop.html'
    },
    {
      id: 2,
      title: 'Calculator',
      description: 'A functional calculator application with clean design and user-friendly interface.',
      image: 'fas fa-calculator',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://sandhyacalculator.netlify.app/'
    },
    {
      id: 3,
      title: 'E-commerce Website',
      description: 'A simple e-commerce website with product listings and shopping functionality.',
      image: 'fas fa-shopping-cart',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://sandhyaecommerce.netlify.app/'
    },
    {
      id: 4,
      title: 'Business Website',
      description: 'A professional business website with clean design and user-friendly interface.',
      image: 'fas fa-building',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      link: 'https://business-demo.com'
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="project-image">
                <i className={project.image}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-link">
                  <span>View Project</span>
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
