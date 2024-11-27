
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import brown from "../../assets/brown.png";
import pink from "../../assets/pink.png";
import bag from "../../assets/bag.png";

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSliderChange = (e) => {
    const scrollValue = e.target.value;
    if (sliderRef.current) {
      const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft = (scrollValue / 100) * maxScrollLeft;
    }
  };

  const handleAddToCart = (product) => {
    navigate("/cart", { state: { product } });
  };

  const products = [
    {
      image: bag,
      isInStock: true,
      itemName: "French Kiss Bag",
      price: 500,
      category: "womens",
      brandName: "ALDO",
      rating: "2k+ rating",
    },
    {
      image: pink,
      isInStock: true,
      itemName: "Burberry Shine",
      price: 150,
      category: "Kids",
      brandName: "FENDI",
      rating: "1k+ rating",
    },
    {
      image: brown,
      isInStock: true,
      itemName: "Alvero Gown",
      price: 300,
      category: "womens",
      brandName: "DIVINE",
      rating: "5K+ rating",
    },
  ];

  return (
    <div style={{ padding: "20px", margin: "0 60px", boxSizing: "border-box" }}>
      <div
        ref={sliderRef}
        className="cards_display"
        style={{
          display: "flex",
          justifyContent: isResponsive ? "flex-start" : "space-between",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          margin: "0 auto", 
          boxSizing: "border-box",
          flexWrap: isResponsive ? "nowrap" : "wrap", 
          overflowX: isResponsive ? "hidden" : "hidden", 
          scrollBehavior: "smooth",
        }}
      >
        {products.map((product, index) => (
          <Card key={index} {...product} onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>

      {isResponsive && (
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onChange={handleSliderChange}
          style={{
            width: "100%",
            marginTop: "10px",
            appearance: "none", 
            background: "#ccc",
            height: "6px",
            borderRadius: "3px",
            outline: "none",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
};

export default CardSlider;