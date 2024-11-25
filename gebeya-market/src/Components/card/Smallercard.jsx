const Smallercard = ({ image, itemName }) => {
    return (
      <div
        className="smallcard-container"
        style={{
          width: '160px',
          height: '170px',
          border: '2px solid #C1C1C1',
          borderRadius: '10px',
          margin: 'auto',
          paddingTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centers content horizontally
          justifyContent: 'space-between', // Distributes space evenly
        }}
      >
        {/* Frame Section */}
        <div
          className="frame"
          style={{
            width: '125px',
            height: '100px',
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
              width: '81px',
              height: '81px',
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
          <p style={{ fontSize: '12px', color: '#888' }}>See All Collections</p>
        </div>
      </div>
    );
  };
  
  export default Smallercard;
  