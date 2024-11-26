import React, { useState } from 'react';
import './footer.css';
import logo from '../../assets/footerlogo.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa'; // Importing the dropdown icon

const Footer = () => {
  // State to manage dropdown visibility for each section
  const [dropdowns, setDropdowns] = useState({
    about: false,
    products: false,
    discover: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
        {/* About Section */}
        <div className="footer-links">
          <h3>
            About
            <span
              className="footer-dropdown-icon"
              onClick={() => toggleDropdown('about')}
            >
              <FaCaretDown /> {/* Dropdown Icon */}
            </span>
          </h3>
          <ul className={dropdowns.about ? 'active' : ''}>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-links">
          <h3>
            Products
            <span
              className="footer-dropdown-icon"
              onClick={() => toggleDropdown('products')}
            >
              <FaCaretDown /> {/* Dropdown Icon */}
            </span>
          </h3>
          <ul className={dropdowns.products ? 'active' : ''}>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#best-sellers">Best Sellers</a></li>
            <li><a href="#offers">Offers</a></li>
          </ul>
        </div>

        {/* Discover Section */}
        <div className="footer-links">
          <h3>
            Discover
            <span
              className="footer-dropdown-icon"
              onClick={() => toggleDropdown('discover')}
            >
              <FaCaretDown /> {/* Dropdown Icon */}
            </span>
          </h3>
          <ul className={dropdowns.discover ? 'active' : ''}>
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
