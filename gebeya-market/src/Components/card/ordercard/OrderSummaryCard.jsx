import React from "react";
import './OrderSummarycard.css';
const OrderSummaryCard = ({
  image,
  productName,
  brandName,
  price,
  subtotal = price,
  shipping = 10,
  tax = 5,
}) => {
  const total = subtotal + shipping + tax;

  return (
    <div
      className="order-summary-card"
      style={{
        width: "420px",
        backgroundColor: "#FFFFFF",
        border: "2px solid #C1C1C1",
        borderRadius: "10px",
        padding: "20px",
        margin: "auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "10px" }}>
        Order Summary
      </h3>
      <hr />
      {/* Product Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        {/* Product Image */}
        <div
          style={{
            width: "82px",
            height: "82px",
            backgroundColor: "#F2F2F2",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15px",
          }}
        >
          <img
            src={image}
            alt="Product"
            style={{ width: "72px", height: "72px", objectFit: "cover" }}
          />
        </div>
        {/* Product Text */}
        <div>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "5px",
              color: "#333333",
            }}
          >
            {productName}
          </h4>
          <p style={{ fontSize: "14px", color: "#888888", margin: "0" }}>
            {brandName}
          </p>
        </div>
      </div>
      <hr />
      {/* Pricing Details */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0",
          fontSize: "14px",
          color: "#888888",
        }}
      >
        <span>Subtotal</span>
        <span style={{ color: "#333333", fontWeight: "bold" }}>${subtotal}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0",
          fontSize: "14px",
          color: "#888888",
        }}
      >
        <span>Shipping</span>
        <span style={{ color: "#333333", fontWeight: "bold" }}>${shipping}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0",
          fontSize: "14px",
          color: "#888888",
        }}
      >
        <span>Tax</span>
        <span style={{ color: "#333333", fontWeight: "bold" }}>${tax}</span>
      </div>
      <hr />
      {/* Total */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        <span>Total</span>
        <span>${total}</span>
      </div>
      {/* Place Order Button */}
      <button
        style={{
          width: "100%",
          height: "53px",
          backgroundColor: "#FEA301",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummaryCard;
