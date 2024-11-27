import React from "react";
import Navbar from "../../Components/navbar/Navbar"; 
import "./home.css"; 
import Categories from "../../Components/card/Categories";
import manpic from "../../assets/man.jpg";
import shoe from "../../assets/whiteshoe.jpg";
import brown from "../../assets/brown.png";
import pink from "../../assets/pink.png";
import bag from "../../assets/bag.png";
import kids from "../../assets/kidshirt.jpg";
import Card from "../../Components/card/Card";
import image1 from "../../assets/images 1.png";
import image2 from "../../assets/images 2.png";
import image3 from "../../assets/images3.png";
import image4 from "../../assets/images4.png";
import image5 from "../../assets/images5.png";
import image6 from "../../assets/images6.png";
import image7 from "../../assets/images7.png";
import image8 from "../../assets/images8.png";
import image9 from "../../assets/images9.png";
import image10 from "../../assets/images10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import heroImage from "../../assets/background.png";
import Largercard from "../../Components/card/largercard";
import tshirt from "../../assets/T_shirt.png";
import gifts from "../../assets/gifts.png";
import yellodress from "../../assets/yellodress.png";
import tutaa from "../../assets/tutaa.png";
import Footer from "../../Components/footer/footer";
import CardSlider from "../../Components/card/CardSlider";
import Smallercard from "../../Components/card/smallercard";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <section className="container">
        <div className="upper-divs">
          <div className="big-header">
            <h1>Gebeya</h1>
          </div>
          <div className="circle-shaped-image">
            <img
              src={manpic}
              alt="Circle Image"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="description-header">
            <p>
              <br></br>
              <br></br>
              Discover a world of convenience with our <br />
              user-friendly platform, curaated <br />
              collections, and exceptional customer
              <br />
              service{" "}
            </p>
            <br></br>
            <br></br>
            <h1>SHOP</h1>
          </div>
        </div>

        <div className="lower-divs">
          <div className="circle-shaped-image">
            <img
              src={shoe}
              alt="Circle Image"
              style={{ width: "260px", height: "260px" }}
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

            <img
              src={kids}
              alt="Circle Image"
              style={{ width: "223px", height: "223px" }}
            />
          </div>
        </div>
      </section>
      <section
        className="latest-collection-section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFF",
          padding: "20px 50px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            padding: "30px",
          }}
        >
          Latest Collection
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "30px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              backgroundColor: "#FEA301",
              borderTopLeftRadius: "40px",
              borderBottomLeftRadius: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "20px" }}>&lt;</span>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              backgroundColor: "#FEA301",
              borderTopRightRadius: "40px",
              borderBottomRightRadius: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "20px" }}>&gt;</span>
            </div>
          </div>
        </div>
      </section>
      <section
       
      >
        {/* <section
          className="cards_display"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px", // Space between cards
            padding: "20px",
            margin: "0 60px", // Keep horizontal margins
            boxSizing: "border-box", // Include padding in total width calculation
            flexWrap: "nowrap", // Prevent wrapping of cards into multiple rows
            overflow: "hidden", // Prevent content from overflowing
          }}
        >
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
        </section> */}
        <CardSlider />

        <section
          className="categories_display"
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "20px",
            margin: "0 60px 0 60px",
          }}
        >
          <Categories text="Men" active={false} />
          <Categories text="Women" active={true} />
          <Categories text="Kids" active={false} />
          <Categories text="Perfumes" active={false} />
          <Categories text="Sport" active={false} />
          <Categories text="Jewelry" active={false} />
        </section>
        <section
          className="small_container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
            margin: "0 60px 0 60px",
          }}
        >
          <Smallercard image={image1} itemName={"Shoes"} />
          <Smallercard image={image2} itemName={"Bags"} />
          <Smallercard image={image3} itemName={"Jackets"} />
          <Smallercard image={image4} itemName={"Lingerie"} />
          <Smallercard image={image5} itemName={"Belts"} />
          <Smallercard image={image6} itemName={"Street wear"} />
        </section>
        <section
          className="small_container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            paddingTop: "20px",
            margin: "0 60px 0 60px",
          }}
        >
          <Smallercard image={image7} itemName={"Sunglasses"} />
          <Smallercard image={image8} itemName={"Sun wear"} />
          <Smallercard image={image9} itemName={"Hats"} />
          <Smallercard image={image10} itemName={"Slippers"} />
          <Smallercard image={image12} itemName={"Wigs"} />
          <Smallercard image={image11} itemName={"Cosmetics"} />
        </section>
        <div
          className="see-more-button"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "35px",
            marginBottom: "80px",
          }}
        >
          <button
            style={{
              display: "flex",
              padding: "10px",
              paddingRight: "20px",
              paddingLeft: "20px",

              backgroundColor: "#882BEC",
              color: "#FFF",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
            }}
          >
            See More &lt;&lt;&lt;
          </button>
        </div>
      </section>
      
      
   
     
    
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Our Curated Summer
              <br />
              Collection
            </h1>
            <p>
              Explore our curated summer collection <br />
              featuring trending styles,vibrant colors and <br />
              lightweight fabrics perfect for long days and
              <br />
              nights.
            </p>
            <button className="explore-btn">Explore Now</button>
          </div>
          <img src={heroImage} alt="Summer collection" className="hero-image" />
          <div className="background-circles">
            <span
              className="circle yellow-circle"
              style={{ top: "10%", right: "60%" }}
            ></span>
            <span
              className="circle purple-circle"
              style={{ top: "20%", right: "35%" }}
            ></span>
            <span
              className="circle yellow-circle"
              style={{ top: "60%", right: "50%" }}
            ></span>
            <span
              className="circle lightgreen-circle"
              style={{ top: "40%", left: "50%" }}
            ></span>
            <span
              className="circle purple-circle"
              style={{ top: "20%", left: "55%" }}
            ></span>
            <span
              className="circle yellow-circle"
              style={{ top: "50%", left: "70%" }}
            ></span>
          </div>
        </div>

 
<section
      className="latest-collection-section"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: '20px 50px',
        margin: '0 30px 0 50px',
      }}
    >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            padding: "30px",
          }}
        >
          Browse by category{" "}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "30px 0 0 30px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              backgroundColor: "#FEA301",
              borderTopLeftRadius: "40px",
              borderBottomLeftRadius: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "20px" }}>&lt;</span>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              backgroundColor: "#FEA301",
              borderTopRightRadius: "40px",
              borderBottomRightRadius: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "20px" }}>&gt;</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="Larger_cards"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
          margin: "70px",
          margin: "0 60px 60px 60px",
        }}
      >
        <Largercard
          image={tshirt}
          itemName={"Casual wear"}
          short={"Over 20 categories in stock"}
        />
        <Largercard
          image={yellodress}
          itemName={"Vintage"}
          short={"Over 31 categories in stock"}
        />
        <Largercard
          image={gifts}
          itemName={"Beauty products"}
          short={"Over 24 categories in stock"}
        />
        <Largercard
          image={tutaa}
          itemName={"Gym wears"}
          short={"Over 62 categories in stock"}
        />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
