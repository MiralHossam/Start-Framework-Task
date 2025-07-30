import React from 'react';
import avatar from '../../assets/avataaars.svg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';
export default function Home() {
  return (
    <div className="home-section">
      <div className="container text-center text-white py-4">
        <div className="home-content">
          <img 
            src={avatar} 
            alt="Profile" 
            className="avatar-img mb-4"
          />
          <h1 className="display-4 fw-bold mb-3">START FRAMEWORK</h1>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-line"></div>
          </div>
          <p className="subtitle fs-5 mb-0">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </div>
  );
}