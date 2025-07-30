import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-4 px-lg-5">
      <div className="container-fluid">
        <NavLink 
          exact
          className="navbar-brand text-uppercase fs-4" 
          to="/"
          activeClassName="active-brand"
        >
          start framework
        </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                exact
                to="/about" 
                className="nav-link text-white"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink 
                exact
                to="/portfolio" 
                className="nav-link text-white"
                activeClassName="active"
              >
                Portfolio
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink 
                exact
                to="/contact" 
                className="nav-link text-white"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;