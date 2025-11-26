
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
            <p>18 years old passionate developer from Bhaktapur, Nepal. I create modern, responsive websites and love bringing ideas to life through code.</p>
            <div className="social-links">
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://github.com/sandhya-2250" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/sandhya_9shrestha/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/sandhya.shrestha.634210/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </button>
              <a className="btn-secondary" href="/attached_assets/Sandhya cv_1757259829961.pdf" target="_blank" rel="noopener noreferrer">
                View My CV
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="profile-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-inner">
                  <img src="/attached_assets/image_1757259908308.png" alt="Sandhya Shrestha" className="profile-image" />
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
