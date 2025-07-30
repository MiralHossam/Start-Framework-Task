import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="text mb-0">
              2215 John Daniel Drive<br />
              Clark, MO 65243
            </p>
          </div>

          <div className="col-md-4 mb-5 mb-md-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <div className="social-icons">
              <a className="btn btn-outline-light btn-social mx-1" href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#">
                <FontAwesomeIcon icon={faDribbble} />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="text mb-0">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>

      <div className="copyright py-4">
        <div className="container text-center">
          <small>Copyright © Your Website 2021</small>
        </div>
      </div>
    </footer>
  );
}