
import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [chatMessages, setChatMessages] = useState([]);
  
  const botResponses = {
    'hi': 'Hello! Nice to meet you! I can help you learn about Sandhya\'s skills and experience.',
    'hello': 'Hi there! I\'m here to help you know more about Sandhya. What would you like to know?',
    'skills': 'Sandhya has expertise in JavaScript, React.js, HTML, CSS, Bootstrap, C#, Figma, Git, and WordPress. She\'s constantly learning new technologies!',
    'experience': 'Sandhya has worked on various projects including a coffee website, calculator app, and e-commerce site. She also completed OJT training gaining real-world experience.',
    'projects': 'Sandhya has created several impressive projects: a Coffee Website, Calculator App, and E-commerce Website. You can check them out in the projects section above!',
    'education': 'Sandhya is currently studying Computer Engineering at Adarsha Secondary School. She passed her SEE (Class 10) with a 3.15 GPA.',
    'contact': 'You can reach Sandhya at shresthasandhya225@gmail.com or call her at +977-9767413655. She\'s also active on GitHub, Facebook, and Instagram!',
    'location': 'Sandhya is based in Bhaktapur, Nepal.',
    'age': 'Sandhya is 18 years old and passionate about web development and design.',
    'languages': 'Sandhya speaks English (proficient), Nepali (fluent), and Hindi (fluent).',
    'default': 'That\'s an interesting question! You can ask me about Sandhya\'s skills, experience, projects, education, or contact information. What would you like to know?'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:shresthasandhya225@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChatSubmit = (message) => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = { type: 'user', text: message };
    setChatMessages(prev => [...prev, userMessage]);
    
    // Generate bot response
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();
      let response = botResponses.default;
      
      for (const keyword in botResponses) {
        if (lowerMessage.includes(keyword) && keyword !== 'default') {
          response = botResponses[keyword];
          break;
        }
      }
      
      const botMessage = { type: 'bot', text: response };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    const input = document.getElementById('chatbot-input');
    const button = document.getElementById('send-message');
    const messagesContainer = document.getElementById('chatbot-messages');
    
    const sendMessage = () => {
      const message = input.value;
      if (message.trim()) {
        handleChatSubmit(message);
        input.value = '';
      }
    };
    
    if (button) {
      button.addEventListener('click', sendMessage);
    }
    
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          sendMessage();
        }
      });
    }
    
    // Auto scroll to bottom
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    return () => {
      if (button) button.removeEventListener('click', sendMessage);
      if (input) input.removeEventListener('keypress', sendMessage);
    };
  }, [chatMessages]);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>shresthasandhya225@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+9779767413655">+977-9767413655</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p><a href="https://www.google.com/maps/place/Bhaktapur,+Nepal" target="_blank" rel="noopener noreferrer">Bhaktapur, Nepal</a></p>
              </div>
            </div>
            
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
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-submit">
              Send Message
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          
          <div className="chatbot-section">
            <h3>Quick Help</h3>
            <div className="chatbot-container">
              <div className="chatbot-messages" id="chatbot-messages">
                <div className="bot-message">
                  <i className="fas fa-robot"></i>
                  <span>Hi! I'm here to help you. Ask me anything about Sandhya's work or experience!</span>
                </div>
                {chatMessages.map((msg, index) => (
                  <div key={index} className={msg.type === 'bot' ? 'bot-message' : 'user-message'}>
                    {msg.type === 'bot' && <i className="fas fa-robot"></i>}
                    <span>{msg.text}</span>
                  </div>
                ))}
              </div>
              <div className="chatbot-input">
                <input type="text" id="chatbot-input" placeholder="Type your message..." />
                <button id="send-message"><i className="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
