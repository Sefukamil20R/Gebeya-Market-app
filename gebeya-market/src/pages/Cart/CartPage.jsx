import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pink from "../../assets/pink.png";
import Navigation from "../../Components/navbar/Navbar"; 
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHeart, FaStar, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbShoppingBag } from "react-icons/tb";
import Categories from "../../Components/card/Categories";
import Card from "../../Components/card/Card";
import GGN from "../../assets/GGN.png";
import pinkay from "../../assets/pinkay.png";
import { CiDeliveryTruck } from "react-icons/ci";
import oneleg from "../../assets/oneleg.png";
import fuller from "../../assets/fuller.png";
import { PiKeyReturn } from "react-icons/pi";
import waa from "../../assets/waa.png";
import Footer from "../../Components/footer/footer";
import './Cart.css';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>No product in cart</div>;
  }

  const handleSaveForLater = () => {
    console.log("Product saved for later:", product);
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product, quantity } });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", padding: "20px" }}>
      <Navigation />

      <div style={{ margin: "10px 35px 10px 35px", color: "#666" }}>
        Home &gt; Kids &gt; Shoes &gt; Sneakers
      </div>

      <div
        style={{ display: "flex", gap: "20px", margin: "0px 35px 0px 35px" }}
      >
        <section className="First-section">
          <div
            style={{
              flex: 2,
              display: "flex",
              gap: "20px",
              backgroundColor: "#fff",
              padding: "20px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "40px",
                height: "40px",
                backgroundColor: "yellow",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaHeart size={20} color="red" />
            </div>

            <div className="left">
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                <img
                  src={product.image}
                  alt="Product"
                  style={{
                    width: "300px",
                    height: "323px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {[pink, oneleg, fuller, waa].map((imageSrc, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#F2F2F2",
                      padding: "5px",
                    }}
                  >
                    <img
                      src={imageSrc} 
                      alt={`Thumbnail ${index + 1}`}
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "10px", color: "#666" }}>
                Share this product
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <FaInstagram size={24} style={{ color: "#666" }} />
                <FaWhatsapp size={24} style={{ color: "#666" }} />
                <FaXTwitter size={24} style={{ color: "#666" }} />
              </div>
            </div>

            <div className="right" style={{ flex: 1 }}>
              <h2>{product.itemName}</h2>
              <hr></hr>
              <p>
                <strong>Brand:</strong> {product.brandName}
              </p>
              <p style={{ margin: "5px 0" }}>
                <span style={{ textDecoration: "line-through", color: "#666" }}>
                  $300
                </span>
                <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                  ${product.price}
                </span>
                <button
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#ccc",
                    border: "none",
                    borderRadius: "4px",
                    padding: "3px 5px",
                    fontSize: "12px",
                  }}
                >
                  -50%
                </button>
              </p>
              <p>50 units left</p>
              <p style={{ color: "#666" }}>
                + Shipping fee may vary on location
              </p>
              <p>
                <FaStar style={{ color: "yellow", marginRight: "5px" }} /> :{" "}
                {product.rating}
              </p>
              <hr />
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <p>Quantity:</p>
                <button
                  onClick={handleDecrement}
                  style={{ backgroundColor: "#FEA301", border: "none" }}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncrement}
                  style={{ backgroundColor: "#FEA301", border: "none" }}
                >
                  +
                </button>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <p>Size:</p>
                {["20", "25", "32", "37"].map((size) => (
                  <div
                    key={size}
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <p>Color:</p>
                {["red", "blue", "green", "yellow"].map((color) => (
                  <div
                    key={color}
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: color,
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  ></div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <button
                  onClick={handleSaveForLater}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "12px 14px 12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <TbShoppingBag /> Save for later
                </button>
                <button
                  onClick={handleBuyNow}
                  style={{
                    padding: "12px 18px 14px 18px",
                    borderRadius: "10px",
                    backgroundColor: "#FEA301",
                    color: "white",
                  }}
                >
                  Buy Now
                </button>
              </div>

              <p style={{ marginTop: "10px", color: "#666" }}>
                Pickup & Pay on collection available
              </p>
            </div>
          </div>
        </section>
        <section></section>
        <section className="second-section">
          <div
            className="second"
            style={{
              flex: 1,
              backgroundColor: "#fff",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Delivery & Returns</h3>
            <hr />
            <>
              <p style={{ fontWeight: "bold" }}>Location</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "387px",
                  height: "56px",
                  border: "1px solid #d3d3d3",
                  borderRadius: "10px",
                  padding: "0 16px",
                  marginBottom: "12px", 
                }}
              >
                <div style={{ fontWeight: "normal", color: "#000" }}>
                  location
                </div>
                <span style={{ fontSize: "24px", color: "#000" }}>
                  <RiArrowDropDownLine />
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "387px",
                  height: "56px",
                  border: "1px solid #d3d3d3", 
                  borderRadius: "10px",
                  padding: "0 16px",
                }}
              >
                <div style={{ fontWeight: "normal", color: "#000" }}>
                  Sublocation
                </div>
                <span style={{ fontSize: "24px", color: "#000" }}>
                  <RiArrowDropDownLine />
                </span>
              </div>

              <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CiDeliveryTruck /> Delivery
              </p>
              <p style={{ lineHeight: "1.5" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;Estimated delivery time is 1-12 business
                days <br />
                &nbsp;&nbsp;&nbsp;&nbsp;For Same-Day-Delivery: Please place your
                order before 12pm <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Next-Day-Delivery: Orders placed after
                12pm <br />
                &nbsp;&nbsp;&nbsp;&nbsp;will be delivered the next day.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Note: Availability may vary by location
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <PiKeyReturn /> Return policy
              </p>
              <p style={{ lineHeight: "1.5" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;Guaranteed 7-day return policy <br />
                &nbsp;&nbsp;&nbsp;&nbsp;For details about return shipping
                options, please visit our &nbsp;&nbsp;&nbsp;&nbsp;Contact page
              </p>
            </>
          </div>
        </section>
      </div>

      <section
        className="Details"
        style={{
          backgroundColor: "white",
          padding: "20px",
          boxSizing: "border-box",
          margin: "20px 35px 0px 35px",
          width: "1352",
          height: "1100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", 
            gap: "10px",
            justifyContent: "flex-start", 
            alignItems: "flex-start",
          }}
        >
          <Categories text="Overview" active={true} />
          <Categories text="Description" active={false} />
          <Categories text="Warranty" active={false} />
          <Categories text="Reviews" active={false} />
        </div>

        <div style={{ color: "#333", padding: "10px" }}>
          <ul style={{ gap: "10px", lineHeight: "1.5" }}>
            <li>
              Available in a wide range of colors, patterns, and patterns and
              themes to appeal to kids.
            </li>
            <li>
              Rubber outsoles with good traction to prevent slips and falls.
            </li>
            <li>
              Built-in arch support to help maintain healthy foot development.
            </li>
            <li>Soft insoles and adequate padding to support growing feet.</li>
          </ul>
        </div>
        <hr />
        <h3>Similar items you may like</h3>
        <div
          style={{
            display: "flex", 
            gap: "10px", 
            padding: "20px 0", 
            margin: "0", 
            justifyContent: "flex-start", 
            alignItems: "flex-start",
            flexWrap: "nowrap", 
            overflowX: "auto", 
            WebkitOverflowScrolling: "touch", 
          }}
        >
          <Card
            image={GGN}
            isInStock={true}
            itemName={"Butlin Blue"}
            price={120}
            category={"kids"}
            brandName={"FENDI"}
            rating={"2k+ rating"}
          />
          <Card
            image={pinkay}
            isInStock={true}
            itemName={"Pink cherrye"}
            price={180}
            category={"Kids"}
            brandName={"FENDI"}
            rating={"1k+ rating"}
          />
          <div style={{ flexGrow: 1 }} />{" "}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;
