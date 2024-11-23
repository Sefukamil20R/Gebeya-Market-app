import React, { useState } from 'react';
import {  FaShoppingBag, FaSearch } from 'react-icons/fa';
import { FaUserLarge } from "react-icons/fa6";
import { FiChevronDown } from 'react-icons/fi';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import flag from '../../assets/united kingdom.svg';

const Navbar = () => {
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const toggleAuthDropdown = () => setAuthDropdownOpen(!authDropdownOpen);
  const toggleMoreDropdown = () => setMoreDropdownOpen(!moreDropdownOpen);
  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="nav">
      {/* Logo Section */}
      <div className="logo">
        <img src = {logo} alt="Logo" />
      </div>

      {/* Authentication Section */}
      <div className="auth">
        <ul>
          <li className="user-icon">
            <FaUserLarge />
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleAuthDropdown}
            onMouseLeave={toggleAuthDropdown}
          >
            <span className={activePage === 'register' || activePage === 'signin' ? 'active' : ''}>
              Register / Sign In
            </span>
            <FiChevronDown className={`dropdown-icon ${authDropdownOpen ? 'flip' : ''}`} />
            <ul className={`dropdown-menu ${authDropdownOpen ? 'open' : ''}`}>
              <li
                className={`dropdown-item ${activePage === 'register' ? 'active' : ''}`}
                onClick={() => handlePageClick('register')}
              >
                Register
              </li>
              <li
                className={`dropdown-item ${activePage === 'signin' ? 'active' : ''}`}
                onClick={() => handlePageClick('signin')}
              >
                Sign In
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Main Menu Section */}
      <div className="main">
        <ul>
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Accessories</li>
          <li
            className="more"
            onMouseEnter={toggleMoreDropdown}
            onMouseLeave={toggleMoreDropdown}
          >
            More
            <FiChevronDown className={`dropdown-icon ${moreDropdownOpen ? 'flip' : ''}`} />
            <ul className={`more-dropdown ${moreDropdownOpen ? 'open' : ''}`}>
              <li>Perfumes</li>
              <li>Jewellery</li>
              <li>Gym Wears</li>
              <li>Vintage Wears</li>
              <li>Sports Wear</li>
              <li>Pajamas</li>
              <li>Slippers</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Section: Search, Language, Cart */}
      <div className="right-section">
        
        <div className="search-bar">
           <FaSearch />
          <input type="text" placeholder="Search" />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
        <div className="language-selector">
          <img src= {flag} alt="US Flag" className="flag" />
          <span>EN / Currency</span>
          <FiChevronDown />
        </div>
        <div className="cart-icon">
          <FaShoppingBag style  />
          <div className="cart-badge">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
