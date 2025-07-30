import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

export default function Contact() {
  const [focusedField, setFocusedField] = useState(null);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4 text-uppercase">Contact Section</h1>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-line"></div>
          </div>
          
          <form>
            <div className={`form-field ${focusedField === 'userName' ? 'focused' : ''}`}>
              <label className={focusedField === 'userName' ? 'active-label' : ''}>
                userName :
              </label>
              <input
                type="text"
                onFocus={() => setFocusedField('userName')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className={`form-field ${focusedField === 'userAge' ? 'focused' : ''}`}>
              <label className={focusedField === 'userAge' ? 'active-label' : ''}>
                userAge :
              </label>
              <input
                type="text"
                onFocus={() => setFocusedField('userAge')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className={`form-field ${focusedField === 'userEmail' ? 'focused' : ''}`}>
              <label className={focusedField === 'userEmail' ? 'active-label' : ''}>
                userEmail :
              </label>
              <input
                type="email"
                onFocus={() => setFocusedField('userEmail')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className={`form-field ${focusedField === 'userPassword' ? 'focused' : ''}`}>
              <label className={focusedField === 'userPassword' ? 'active-label' : ''}>
                userPassword :
              </label>
              <input
                type="password"
                onFocus={() => setFocusedField('userPassword')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <button type="submit" className="submit-btn">
              send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}