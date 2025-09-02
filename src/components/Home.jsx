
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="intro">
            <h1>Hi, I'm <span className="highlight">Sandhya Shrestha</span></h1>
            <h2>Web Developer & Designer</h2>
            <p>18 years old passionate developer from Arghakhanchi, Nepal. I create modern, responsive websites and love bringing ideas to life through code.</p>
            <div className="social-links">
              <a href="mailto:sandhya@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://github.com/sandhyashrestha" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com/sandhyashrestha" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/sandhyashrestha" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="profile-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-inner">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
