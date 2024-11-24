import React from 'react';
import Navbar from "../../Components/navbar/Navbar"; // Import the Navbar component
import './home.css'; // Assume you are creating a separate CSS file for styles
import Categories from '../../Components/card/categories';
import manpic from '../../assets/man.jpg'
import shoe from '../../assets/whiteshoe.jpg'
import brown from '../../assets/brown.png'
import pink from '../../assets/pink.png'
import bag from '../../assets/bag.png'
import kids from '../../assets/kidshirt.jpg'
import Card from '../../Components/card/Card';
import Smallercard from '../../Components/card/smallercard';



const HomePage = () => {
  return (
    <div>
      {/* Include Navbar component here */}
      <Navbar />

      <section className="container">
        {/* Upper Section */}
        <div className="upper-divs">
          <div className="big-header">
            <h1>Gebeya</h1>
          </div>
          <div className="circle-shaped-image">
            <img src= {manpic} alt="Circle Image" 
            style={{ width: '300px', height: '300px' }}
/>
          </div>
          <div className="description-header">
            <p>
            <br></br>
            <br></br>
            

            Discover a world of convenience with our <br />
            user-friendly platform, curaated <br />
            collections, and exceptional customer<br />
             service </p>
             <br></br>
            <br></br>
            <h1>SHOP</h1>
            
          </div>
        </div>

        {/* Lower Section */}
        <div className="lower-divs">
          <div className="circle-shaped-image">
            <img src= {shoe} alt="Circle Image"  
            style={{ width: '260px', height: '260px' }}

            />
          </div>
          <div className="explore-now-button">
          <br></br>
          <br></br>
          <br></br>

            <button>Explore Now</button>
          </div>
          <div className="circle-shaped-image">
          <br></br>
          <br></br>

            <img src= {kids} alt="Circle Image" 
                        style={{ width: '223px', height: '223px' }}
/>

          </div>
        </div>
      </section>
      <section
      className="latest-collection-section"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: '20px 50px',
      }}
    >
      {/* Left Part: Text */}
      <div
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          padding : '30px',

        }}
      >
        Latest Collection
      </div>

      {/* Right Part: Navigation Icons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding : '30px',

        }}
      >
        {/* Left Icon inside Half Circle */}
        <div
          style={{
            position: 'relative',
            width: '40px',
            height: '40px',
            backgroundColor: '#FEA301',
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '20px' }}>&lt;</span>
          </div>
        </div>

        {/* Right Icon inside Half Circle */}
        <div
          style={{
            position: 'relative',
            width: '40px',
            height: '40px',
            backgroundColor: '#FEA301',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '20px' }}>&gt;</span>
          </div>
        </div>
      </div>
     

    </section>
    <section
     style={{
      // padding: '40px 40px',
      // padding: '20px',
      
      // boxSizing: 'border-box', 
    }}>

    <section className='cards_display'
      style={
        {
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '20px',
          
        }
      }>
      <Card image={bag} 
      isInStock={true} 
      itemName = {'French Kiss Bag'}
      price= {500} 
      category={'womens'}
      brandName={'ALDO'}
      rating={'2k+ rating'}
     />
     <Card image={pink} 
      isInStock={true} 
      itemName = {'Burberry shine'}
      price= {150} 
      category={'Kids'}
      brandName={'FENDI'}
      rating={'1k+ rating'}
     />
     <Card image={brown} 
      isInStock={true} 
      itemName = {'Alvero Gown'}
      price= {300} 
      category={'womens'}
      brandName={'DIVINE'}
      rating={'5K+ rating'}
     />
</section>
    <section className='categories_display'
      style={
        {
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '20px',
        }
        
      }>
      <Categories text="Men" active={false} />
      <Categories text="Women" active={true} />
      <Categories text="Kids" active={false} />
      <Categories text="Perfumes" active={false} />
      <Categories text="Sport" active={false} />
      <Categories text="Jewelry" active={false} />
      </section>
      <section className='small_container'
      style={
        {
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          paddingTop: '20px',
        }
      }>
       <Smallercard image={bag} itemName={'French Kiss Bag'} /> 
       <Smallercard image={bag} itemName={'French Kiss Bag'} /> 

       <Smallercard image={bag} itemName={'French Kiss Bag'} /> 
        <Smallercard image={bag} itemName={'French Kiss Bag'} />
        <Smallercard image={bag} itemName={'French Kiss Bag'} />
        <Smallercard image={bag} itemName={'French Kiss Bag'} />

      </section>
      <section className='small_container'
      style={
        {
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          paddingTop: '20px',
        }
      }>
       <Smallercard image={bag} itemName={'French Kiss Bag'} /> 
       <Smallercard image={bag} itemName={'French Kiss Bag'} /> 
      <Smallercard image={bag} itemName={'French Kiss Bag'} /> 
        <Smallercard image={bag} itemName={'French Kiss Bag'} />
        <Smallercard image={bag} itemName={'French Kiss Bag'} />
        <Smallercard image={bag} itemName={'French Kiss Bag'} />

      </section>
      </section>

       
</div>
  
  
      
    
   


























  );
}

export default HomePage;
