const Largercard = ({ image, itemName ,short}) => {
    return (
      <div
        className="Larger-container"
        style={{
          width: '250px',
          height: '320px',
          borderRadius: '10px',
          paddingTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'space-between', 
        }}
      >
        {/* Frame Section */}
        <div
          className="frame"
          style={{
            width: '230px',
            height: '250px',
            backgroundColor: '#F2F2F2',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center', // Centers image horizontally
            alignItems: 'center', // Centers image vertically
          }}
        >
          {/* Image */}
          <img
            src={image}
            alt="Product"
            style={{
              width: '160px',
              height: '180px',
            }}
          />
        </div>
  
        {/* Text Section */}
        <div
          style={{
            textAlign: 'center', // Centers text inside the card
            padding: '15px',
          }}
        >
          {/* Item Name */}
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            {itemName}
          </h3>
  
          {/* Subtext */}
          <p style={{ fontSize: '12px', color: '#888' }}>{short}</p>
        </div>
      </div>
    );
  };
  
  export default Largercard;
  