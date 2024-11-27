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
          alignItems: 'center', 
          justifyContent: 'space-between', 
        }}
      >
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
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <img
            src={image}
            alt="Product"
            style={{
              width: '81px',
              height: '81px',
            }}
          />
        </div>
  
        <div
          style={{
            textAlign: 'center', 
            padding: '15px',
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            {itemName}
          </h3>
  
          <p style={{ fontSize: '12px', color: '#888' }}>See All Collections</p>
        </div>
      </div>
    );
  };
  
  export default Smallercard;
  