import React from "react";
import "./Categories.css"; 

const Categories = ({ text, active }) => {
  return (
    <div className={`category ${active ? "active" : ""}`}>
      {text}
    </div>
  );
};

export default Categories;
