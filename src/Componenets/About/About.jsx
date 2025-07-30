import React from 'react';

export default function About() {
  const bgColor = '#1abc9c';
  return (
    <section className="about-section py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h2 className="text-center text-uppercase text-white font-weight-bold">About Component</h2>
        
        <div className="divider mb-5">
          <div className="divider-line"></div>
          <div className="divider-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-line"></div>
        </div>
        
        <div className="row text-white">
          <div className="col-lg-6 mb-4">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-lg-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}