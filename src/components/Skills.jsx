
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 90 },
    { name: 'React.js', icon: 'fab fa-react', level: 85 },
    { name: 'HTML', icon: 'fab fa-html5', level: 95 },
    { name: 'CSS', icon: 'fab fa-css3-alt', level: 90 },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 80 },
    { name: 'C#', icon: 'fas fa-code', level: 75 },
    { name: 'Figma', icon: 'fab fa-figma', level: 85 },
    { name: 'Git', icon: 'fab fa-git-alt', level: 80 },
    { name: 'WordPress', icon: 'fab fa-wordpress', level: 75 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
