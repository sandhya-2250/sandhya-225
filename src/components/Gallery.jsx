import React, { useState } from 'react';
import './Gallery.css';
import img_1 from "../../public/assets/img_1.png";
import img_2 from "../../public/assets/img_2.png";
import img_3 from "../../public/assets/img_3.png";
import img_4 from "../../public/assets/img_4.png";
import img_5 from "../../public/assets/img_5.png";
import img_6 from "../../public/assets/img_6.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      title: 'Traditional Attire',
      category: 'Cultural',
      image: img_1,
      description: 'Beautiful traditional Nepali cultural dress'
    },
    {
      id: 2,
      title: 'Graceful Presence',
      category: 'Personal',
      image: img_2,
      description: 'Beauty captured in natural light'
    },
    {
      id: 3,
      title: 'Traditional Elegance',
      category: 'Cultural',
      image: img_3,
      description: 'Wearing tradition with quiet pride'
    },
    {
      id: 4,
      title: 'Pink saree',
      category: 'Personal',
      image: img_4,
      description: 'Beautiful  attire in natural setting'
    },
    {
      id: 5,
      title: 'Elegant Style',
      category: 'Fashion',
      image: img_5,
      description: 'Elegant fashion photography'
    },
    {
      id: 6,
      title: 'Childhood Memories',
      category: 'Personal',
      image: img_6,
      description: 'Adorable childhood moments captured beautifully'
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
        <p className="section-subtitle">A curated collection of my original images, capturing moments, moods, and
           stories through visual composition. Each piece represents a unique perspective and creative expression.</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image">
                {image.image.startsWith('/') ? (
                  <img src={image.image} alt={image.title} className="gallery-photo" />
                ) : (
                  <i className={image.image}></i>
                )}
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
                {selectedImage.image.startsWith('/') ? (
                  <img src={selectedImage.image} alt={selectedImage.title} className="modal-photo" />
                ) : (
                  <i className={selectedImage.image}></i>
                )}
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

