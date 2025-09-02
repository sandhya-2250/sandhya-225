
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Sandhya Shrestha</h3>
            <p>Web Developer & Designer passionate about creating amazing digital experiences.</p>
          </div>
          <div className="footer-links">
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
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Sandhya Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
