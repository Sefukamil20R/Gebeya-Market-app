import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
import { FaUserLarge } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import flag from '../../assets/united kingdom.svg';

const Navbar = () => {
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For Responsive Menu
  const [activePage, setActivePage] = useState(null);

  const toggleAuthDropdown = () => setAuthDropdownOpen(!authDropdownOpen);
  const toggleMoreDropdown = () => setMoreDropdownOpen(!moreDropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="nav">
      <div className="navbar-desktop">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

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
              <span
                className={`register-signin ${
                  activePage === 'register' || activePage === 'signin' ? 'active' : ''
                }`}
              >
                Register / Sign In <FiChevronDown className={`dropdown-icon ${authDropdownOpen ? 'flip' : ''}`} />
              </span>
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

        <div className="right-section">
          <div className="search-bar">
            <div className="search-input-container">
              <HiOutlineSearch className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>
            <button className="search-button">
              <HiOutlineSearch className="search-button-icon" />
            </button>
          </div>

          <div className="language-selector">
            <img src={flag} alt="Flag" className="flag" />
            <span>EN / Currency</span>
            <FiChevronDown />
          </div>
          <div className="shop-icon-container">
            <div className="shop-circle">
              <HiOutlineShoppingBag className="shopping-icon" />
              <span className="notification-badge">2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-responsive">
        <FaBars className="hamburger-icon" onClick={toggleMenu} />
        <img src={logo} alt="Logo" className="responsive-logo" style={{marginLeft:'10px'}}/>
        <div className="responsive-icons">
        <div className="responsiveSearchbar">
            <div className="search-input-container">
              <HiOutlineSearch className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>
            <button className="search-button">
              <HiOutlineSearch className="search-button-icon" />
            </button>
          </div>
          <div className="shop-icon-container">
            <div className="shop-circle">
              <HiOutlineShoppingBag className="shopping-icon" />
              <span className="notification-badge">2</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`responsive-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Register/SignUp
          <FiChevronDown /></li>

          <hr/>
          <li>Our Catagories</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Accessories</li>
          <li>More</li>
          <hr/>
          <li> <img src={flag} alt="Flag" className="flag" />
            <span>EN / Currency</span>
            <FiChevronDown /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
