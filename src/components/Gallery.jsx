
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      title: 'Coffee Website Design',
      category: 'Web Design',
      image: 'fas fa-coffee',
      description: 'Modern coffee shop website with clean aesthetics'
    },
    {
      id: 2,
      title: 'E-commerce Interface',
      category: 'UI/UX',
      image: 'fas fa-shopping-bag',
      description: 'User-friendly shopping experience design'
    },
    {
      id: 3,
      title: 'Mobile App UI',
      category: 'Mobile Design',
      image: 'fas fa-mobile-alt',
      description: 'Responsive mobile application interface'
    },
    {
      id: 4,
      title: 'Dashboard Design',
      category: 'UI/UX',
      image: 'fas fa-chart-line',
      description: 'Analytics dashboard with data visualization'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: 'fas fa-laptop-code',
      description: 'Creative portfolio with modern animations'
    },
    {
      id: 6,
      title: 'Brand Identity',
      category: 'Branding',
      image: 'fas fa-palette',
      description: 'Complete brand identity and logo design'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A showcase of my creative work and designs</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image">
                <i className={image.image}></i>
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h3>{image.title}</h3>
                    <span className="category">{image.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-image">
                <i className={selectedImage.image}></i>
              </div>
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <span className="modal-category">{selectedImage.category}</span>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
