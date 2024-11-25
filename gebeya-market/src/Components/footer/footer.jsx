import React from 'react';
import './footer.css';
import logo from '../../assets/footerlogo.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Using Font Awesome icons
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="footer-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="footer-icon" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <div className="footer-links">
          <h3>About</h3>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Products</h3>
          <ul>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#best-sellers">Best Sellers</a></li>
            <li><a href="#offers">Offers</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Discover</h3>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
