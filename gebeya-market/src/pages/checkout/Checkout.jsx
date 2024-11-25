import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/footer';
import ShippingAddressCard from '../../Components/card/shipping/ShippingAddressCard';
import OrderSummaryCard from '../../Components/card/ordercard/OrderSummaryCard'; // Import the OrderSummaryCard component
import pink from '../.././assets/pink.png';
import PaymentCard from '../../Components/card/payement/PaymentCard';
const Checkout = () => {
  return (
    <div style={{ backgroundColor: '#F5F5F5'}}>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px', // Horizontal gap between the cards
          margin : '10px 40px 10px  40px',
        }}
      >
        {/* Shipping Address Card */}
        <div style={{ flex: 2 ,           padding: '20px',
}}> {/* Give ShippingAddressCard more space */}
          <ShippingAddressCard />
        </div>
        
        {/* Order Summary Card */}
        <div style={{ flex: 2  ,padding: '40px',
}}> {/* OrderSummaryCard occupies less space */}
          <OrderSummaryCard 
          image={pink}
          productName={'Burberry shine'}
          brandName={'Fendi'}
          price={150}
          />
        </div>
      </div>
      <PaymentCard/>

      <Footer />
    </div>
  );
};

export default Checkout;
