import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About TaLabs Transport</h3>
          <p>Your trusted partner in transportation and logistics solutions.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/fleet">Our Fleet</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@talabs-transport.com</p>
          <p>Phone: +1 (XXX) XXX-XXXX</p>
          <p>Address: Ikeja Lagos</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TaLabs Transport. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
