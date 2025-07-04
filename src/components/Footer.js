import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@nailsnthings.com" className="footer-link">
                  Email: contact@nailsnthings.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="footer-link">
                  Phone: (732) 841-4755
                </a>
              </li>
              <li>
                <a href="https://venmo.com/jsnapoli1" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Venmo: @jsnapoli1
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/product1" className="footer-link">Stanley Cups</a>
              </li>
              <li>
                <a href="/product2" className="footer-link">Wine Glasses</a>
              </li>
              <li>
                <a href="/product3" className="footer-link">Ornaments</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>About Nails N' Things</h4>
            <p className="footer-text">
              Premium handmade, customized goods for all your needs.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Nails N' Things. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 