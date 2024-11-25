import React, { useState } from 'react';
import './ShippingAddressCard.css';  // Import the updated CSS for styling
import { RiArrowDropDownLine } from 'react-icons/ri';

const ShippingAddressCard = () => {
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  // List of random states
  const states = ['California', 'New York', 'Texas', 'Florida', 'Nevada'];

  const toggleDropdown = () => setIsStateDropdownOpen(!isStateDropdownOpen);

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setIsStateDropdownOpen(false);
  };

  return (
    <div className="shipping-address-card">
      <h3 className="card-title">Shipping Address</h3>
      <form className="shipping-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form-input" 
            placeholder="First & Last Name" 
          />
        </div>

        {/* Address 1 Input */}
        <div className="form-group">
          <label htmlFor="address1">Address 1</label>
          <input 
            type="text" 
            id="address1" 
            className="form-input" 
            placeholder="412, Dubai St" 
          />
        </div>

        {/* Address 2 Input */}
        <div className="form-group">
          <label htmlFor="address2">Address 2</label>
          <input 
            type="text" 
            id="address2" 
            className="form-input" 
            placeholder="23rd, Boulevard Ave" 
          />
        </div>

        {/* City, State, and Zip Inputs */}
        <div className="form-row">
          {/* City Input */}
          <div className="form-group  rows">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city" 
              className="form-input" 
              placeholder="Enter City" 
            />
          </div>

          {/* State Input with Dropdown */}
          <div className="form-group rows ">
            <label htmlFor="state">State</label>
            <div 
              className="dropdown"
              onClick={toggleDropdown} 
              style={{ position: 'relative' }}
            >
              <input 
                type="text" 
                id="state" 
                className="form-input" 
                placeholder={selectedState || 'Select State'} 
                readOnly 
              />
              <RiArrowDropDownLine className="dropdown-icon" style={{ position: 'absolute', right: '10px', top: '10px' }} />
              {isStateDropdownOpen && (
                <div className="dropdown-list">
                  {states.map((state, index) => (
                    <div key={index} className="dropdown-item" onClick={() => handleStateSelect(state)}>
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Zip Code Input */}
          <div className="form-group">
            <label htmlFor="zip">Zip</label>
            <input 
              type="text" 
              id="zip" 
              className="form-input" 
              placeholder="Zip code" 
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressCard;
