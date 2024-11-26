import React, { useRef, useState, useEffect } from "react";
import Card from "./Card"; // Adjust the path based on your structure
import brown from "../../assets/brown.png";
import pink from "../../assets/pink.png";
import bag from "../../assets/bag.png";

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);

  // Check screen size to determine responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial load
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

  return (
    <div style={{ padding: "20px", margin: "0 60px", boxSizing: "border-box" }}>
      {/* Cards Section */}
      <div
        ref={sliderRef}
        className="cards_display"
        style={{
          display: "flex",
          justifyContent: isResponsive ? "flex-start" : "space-between",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          margin: "0 auto", // Center content on desktop
          boxSizing: "border-box",
          flexWrap: isResponsive ? "nowrap" : "wrap", // Prevent wrapping on small screens
          overflowX: isResponsive ? "hidden" : "hidden", // Hide native scrollbars
          scrollBehavior: "smooth",
        }}
      >
        {/* Add your cards */}
        <Card
          image={bag}
          isInStock={true}
          itemName={"French Kiss Bag"}
          price={500}
          category={"womens"}
          brandName={"ALDO"}
          rating={"2k+ rating"}
        />
        <Card
          image={pink}
          isInStock={true}
          itemName={"Burberry shine"}
          price={150}
          category={"Kids"}
          brandName={"FENDI"}
          rating={"1k+ rating"}
        />
        <Card
          image={brown}
          isInStock={true}
          itemName={"Alvero Gown"}
          price={300}
          category={"womens"}
          brandName={"DIVINE"}
          rating={"5K+ rating"}
        />
      </div>

      {/* Horizontal Slider (only on small screens) */}
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
            appearance: "none", // Remove default slider styles
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
