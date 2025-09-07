
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm Sandhya Shrestha</h3>
            <p>
              I'm an 18-year-old passionate web developer from Arghakhanchi, Nepal. My journey in 
              programming started early, and I've been dedicated to creating beautiful, functional 
              websites that make a difference.
            </p>
            <p>
              I completed my Class 10 board exam in 2080 with a 3.15 GPA, and since then, I've been 
              focused on honing my skills in web development and design. I believe in continuous 
              learning and staying updated with the latest technologies.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <strong>Age:</strong> 18 years old
              </div>
              <div className="info-item">
                <strong>Location:</strong> Arghakhanchi, Nepal
              </div>
              <div className="info-item">
                <strong>Education:</strong> Class 10 (3.15 GPA)
              </div>
              <div className="info-item">
                <strong>Hobbies:</strong> Dancing, Reading, Coding
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              <img 
                src="/attached_assets/image_1757259941932.png" 
                alt="Sandhya Shrestha" 
                className="profile-image"
              />
              <div className="image-overlay">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
