// import React from 'react';
// import { CiHeart } from "react-icons/ci";

// const Card = ({
//   image,
//   isInStock,
//   category,
//   rating,
//   itemName,
//   brandName,
//   price
// }) => {
//   return (
//     <div className="card-container" 
//     style={{
//       flex: "1", // Make cards flexible to fit within the row
//       maxWidth: "400px", // Prevent cards from growing too large
//       minWidth: "300px", // Prevent cards from shrinking too small
//       height: "370px", // Maintain height
//       border: "2px solid #C1C1C1",
//       borderRadius: "10px",
//       margin: "0", // Reset margins for card container
//       paddingTop: "10px",
//       boxSizing: "border-box", // Ensures padding and borders are included in width
//     }}>
//       {/* Frame Section */}
//       <div
//         className="frame"
//         style={{
//           // width: '350px',
//           height: '190px',
//           maxWidth: "200px", // Prevent cards from growing too large
//           minWidth: "350px",
//           backgroundColor: '#F2F2F2',
//           position: 'relative',
//           borderRadius: '8px',
//           overflow: 'hidden',
//           margin: '0 auto',
//         }}
//       >
//         {/* Image */}
//         <img
//           src={image}
//           alt="Product"
//           style={{
//             width: '213px',
//             height: '213px',
//             position: 'absolute',
//             top: '22px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//           }}
//         />

//         {/* In Stock Badge */}
//         <div
//           style={{
//             position: 'absolute',
//             top: '10px',
//             right: '10px',
//             width: '67px',
//             height: '34px',
//             backgroundColor: '#FFF',
//             borderRadius: '20px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             color: '#555555',
//           }}
//         >
//           <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{isInStock ? 'In Stock' : 'Out of Stock'}</span>
//         </div>

//         {/* Heart Icon */}
//         <div
//           style={{
//             position: 'absolute',
//             top: '10px',
//             left: '10px',
//             width: '40px',
//             height: '40px',
//             backgroundColor: '#FFF',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <span style={{ fontSize: '20px', color : 'black'}}><CiHeart /></span>
//         </div>
//       </div>

//       {/* Below Frame Section */}
//       <div style={{ padding: '15px' }}>
//         {/* Category and Rating Row */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             marginBottom: '10px',
//           }}
//         >
//           {/* Category */}
//           <div
//             style={{
//               padding: '6px 8px',
//               borderRadius: '15px',
//               fontSize: '12px',
//               color: '#555555',  
//               border : '1px solid #555555'           
//             }}
//           >
//             {category}
//           </div>

//           {/* Rating */}
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <span style={{ color: 'gold', fontSize: '16px', marginRight: '5px' }}>&#9733;</span>
//             <span style={{ fontSize: '12px' }}>{rating}</span>
//           </div>
//         </div>

//         {/* Item Name */}
//         <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}>{itemName}</h3>

//         {/* Brand Name */}
//         <p style={{ fontSize: '12px', color: '#888', margin: '5px 0' }}>{brandName}</p>

//         {/* Price and Add to Cart Button */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginTop: '15px',
//           }}
//         >
//           <span style={{ fontSize: '18px', fontWeight: 'bold' }}>${price}</span>
//           <button
//             style={{
//               backgroundColor: '#FEA301',
//               color: '#FFF',
//               border: 'none',
//               padding: '15px 22px',
//               borderRadius: '6px',
//               cursor: 'pointer',
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
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
  onAddToCart // Add this prop to handle "Add to Cart" button click
}) => {
  return (
    <div
      className="card-container"
      style={{
        flex: "1", // Flexible cards within the row
        maxWidth: "350px", // Restrict maximum width of card
        minWidth: "300px", // Ensure minimum size
        height: "400px", // Adjust height to fit content
        border: "2px solid #C1C1C1",
        borderRadius: "10px",
        paddingTop: "10px",
        paddingLeft: "10px", // Added left padding to create space
        paddingRight: "10px", // Added right padding to create space
        margin: "0 auto", // Center cards
        boxSizing: "border-box", // Includes padding and borders in the width
      }}
    >
      {/* Frame Section */}
      <div
        className="frame"
        style={{
          width: '100%', // Frame takes full width of the card
          height: '200px', // Adjust height proportionally
          backgroundColor: '#F2F2F2',
          position: 'relative',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Image */}
        <img
          src={image}
          alt="Product"
          style={{
            maxWidth: '100%', // Image scales with frame
            maxHeight: '100%', // Ensures it stays within frame
            objectFit: 'contain', // Maintains aspect ratio
          }}
        />

        {/* In Stock Badge */}
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

        {/* Heart Icon */}
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

      {/* Below Frame Section */}
      <div style={{ padding: '15px' }}>
        {/* Category and Rating Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          {/* Category */}
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

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'gold', fontSize: '16px', marginRight: '5px' }}>&#9733;</span>
            <span style={{ fontSize: '12px' }}>{rating}</span>
          </div>
        </div>

        {/* Item Name */}
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}>{itemName}</h3>

        {/* Brand Name */}
        <p style={{ fontSize: '12px', color: '#888', margin: '5px 0' }}>{brandName}</p>

        {/* Price and Add to Cart Button */}
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
            onClick={onAddToCart} // Use the passed prop to handle "Add to Cart" button click
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