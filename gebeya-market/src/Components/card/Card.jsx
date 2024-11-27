
import React from 'react';
import { CiHeart } from "react-icons/ci";

const Card = ({
  image,
  isInStock,
  category,
  rating,
  itemName,
  brandName,
  price,
  onAddToCart 
}) => {
  return (
    <div
      className="card-container"
      style={{
        flex: "1", 
        maxWidth: "350px", 
        minWidth: "300px", 
        height: "400px", 
        border: "2px solid #C1C1C1",
        borderRadius: "10px",
        paddingTop: "10px",
        paddingLeft: "10px", 
        paddingRight: "10px", 
        margin: "0 auto", 
        boxSizing: "border-box", 
      }}
    >
      <div
        className="frame"
        style={{
          width: '100%', 
          height: '200px', 
          backgroundColor: '#F2F2F2',
          position: 'relative',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={image}
          alt="Product"
          style={{
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain', 
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '67px',
            height: '34px',
            backgroundColor: '#FFF',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            color: '#555555',
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{isInStock ? 'In Stock' : 'Out of Stock'}</span>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '40px',
            height: '40px',
            backgroundColor: '#FFF',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span style={{ fontSize: '20px', color: 'black' }}>
            <CiHeart />
          </span>
        </div>
      </div>

      <div style={{ padding: '15px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              padding: '6px 8px',
              borderRadius: '15px',
              fontSize: '12px',
              color: '#555555',
              border: '1px solid #555555',
            }}
          >
            {category}
          </div>

    
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'gold', fontSize: '16px', marginRight: '5px' }}>&#9733;</span>
            <span style={{ fontSize: '12px' }}>{rating}</span>
          </div>
        </div>

  
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}>{itemName}</h3>

     
        <p style={{ fontSize: '12px', color: '#888', margin: '5px 0' }}>{brandName}</p>

  
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '15px',
          }}
        >
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>${price}</span>
          <button
            onClick={onAddToCart} 
            style={{
              backgroundColor: '#FEA301',
              color: '#FFF',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;