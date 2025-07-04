import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img src="/nailsnthings.png" alt="Nails N' Things Logo" className="logo-img" />
            <span className="logo-text">NAILS N' THINGS</span>
          </Link>
          
          <ul className="navbar-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/product1" className="nav-link">Stanley Cups</Link>
            </li>
            <li>
              <Link to="/product2" className="nav-link">Wine Glasses</Link>
            </li>
            <li>
              <Link to="/product3" className="nav-link">Ornaments</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 