import React from "react";
import { FaCreditCard, FaWallet, FaUniversity } from "react-icons/fa";
import "./Payment.css";
const PaymentCard = () => {
  return (
    <div className="payment-card-container">
      <h3 className="payment-card-title">Payment Method</h3>

      {/* Payment Options */}
      <div className="payment-options">
        {/* Credit Card Box */}
        <div className="payment-option credit-card">
          <FaCreditCard size={40} color="#FFFFFF" style={{ marginBottom: "10px" }} />
          <span className="payment-option-text">Card</span>
        </div>

        {/* Wallet Box */}
        <div className="payment-option wallet">
          <FaWallet size={40} color="#555" style={{ marginBottom: "10px" }} />
          <span className="payment-option-text">Wallet</span>
        </div>

        {/* Bank Transfer Box */}
        <div className="payment-option bank-transfer">
          <FaUniversity size={40} color="#555" style={{ marginBottom: "10px" }} />
          <span className="payment-option-text">Bank Transfer</span>
        </div>
      </div>

      {/* Input Fields */}
      <div className="input-field">
        <label className="input-label">Name on Card</label>
        <input type="text" placeholder="Name on card" className="input-box" />
      </div>

      <div className="input-field">
        <label className="input-label">Card Number</label>
        <input type="text" placeholder="0000 0000 0000 0000" className="input-box" />
      </div>

      {/* Expiry and CVV */}
      <div className="expiry-cvv">
        {/* Expiry Fields */}
        <div className="expiry-field">
          <label className="input-label">Expiry</label>
          <div className="expiry-select">
            <select className="select-box">
              <option value="" disabled selected>
                MM
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              {/* Add other months */}
            </select>
            <select className="select-box">
              <option value="" disabled selected>
                YYYY
              </option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              {/* Add other years */}
            </select>
          </div>
        </div>

        {/* CVV Field */}
        <div className="cvv-field">
          <label className="input-label">CVV</label>
          <input type="text" placeholder="CVV" className="input-box" />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;