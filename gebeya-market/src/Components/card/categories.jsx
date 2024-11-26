import React from "react";
import "./Categories.css"; // Add a CSS file for styles

const Categories = ({ text, active }) => {
  return (
    <div className={`category ${active ? "active" : ""}`}>
      {text}
    </div>
  );
};

export default Categories;
