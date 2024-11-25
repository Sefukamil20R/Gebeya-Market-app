import React from "react";
import { FaCreditCard, FaWallet, FaUniversity } from "react-icons/fa";

const PaymentCard = () => {
  return (
    <div
      style={{
        width: "750px",
        height: "570px",
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
        Payment Method
      </h3>

      {/* Payment Options */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        {/* Credit Card Box */}
        <div
          style={{
            width: "220px",
            height: "126px",
            backgroundColor: "#FEA301",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FaCreditCard size={40} color="#FFFFFF" style={{ marginBottom: "10px" }} />
          <span style={{ fontSize: "14px", color: "#FFFFFF" }}>Card</span>
        </div>

        {/* Wallet Box */}
        <div
          style={{
            width: "220px",
            height: "126px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FaWallet size={40} color="#555" style={{ marginBottom: "10px" }} />
          <span style={{ fontSize: "14px", color: "#555" }}>Wallet</span>
        </div>

        {/* Bank Transfer Box */}
        <div
          style={{
            width: "220px",
            height: "126px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FaUniversity size={40} color="#555" style={{ marginBottom: "10px" }} />
          <span style={{ fontSize: "14px", color: "#555" }}>Bank Transfer</span>
        </div>
      </div>

      {/* Input Fields */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#555" }}>
          Name on Card
        </label>
        <input
          type="text"
          placeholder="Name on card"
          style={{
            width: "100%",
            height: "40px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #C1C1C1",
            marginBottom: "20px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#555" }}>
          Card Number
        </label>
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          style={{
            width: "100%",
            height: "40px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #C1C1C1",
            marginBottom: "20px",
          }}
        />
      </div>

      {/* Expiry and CVV */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {/* Expiry Fields */}
        <div style={{ width: "48%" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#555" }}>
            Expiry
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            <select
              style={{
                width: "50%",
                height: "40px",
                borderRadius: "5px",
                border: "1px solid #C1C1C1",
                padding: "10px",
              }}
            >
              <option value="" disabled selected>
                MM
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              {/* Add other months */}
            </select>
            <select
              style={{
                width: "50%",
                height: "40px",
                borderRadius: "5px",
                border: "1px solid #C1C1C1",
                padding: "10px",
              }}
            >
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
        <div style={{ width: "48%" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#555" }}>
            CVV
          </label>
          <input
            type="text"
            placeholder="CVV"
            style={{
              width: "50%",
              height: "40px",
              borderRadius: "5px",
              border: "1px solid #C1C1C1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
