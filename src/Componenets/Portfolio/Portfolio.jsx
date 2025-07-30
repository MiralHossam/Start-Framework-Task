import React, { useState } from 'react';
import './Portfolio.css';
import poert1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

const Portfolio = () => {
  const projectImages = [
    poert1,
    port2,
    port3,
    poert1, 
    port2,  
    port3   
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-heading text-uppercase">portfolio component</h2>
      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-line"></div>
      </div>
      
      <div className="portfolio-grid">
        {projectImages.map((image, index) => (
          <div 
            key={index} 
            className="portfolio-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} className="portfolio-image" alt={`Project ${index + 1}`} />
            <div className="portfolio-overlay">
              <span><i class="fa-solid fa-plus"></i></span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default Portfolio;