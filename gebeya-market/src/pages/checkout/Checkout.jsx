import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/footer';
import ShippingAddressCard from '../../Components/card/shipping/ShippingAddressCard';
import OrderSummaryCard from '../../Components/card/ordercard/OrderSummaryCard'; // Import the OrderSummaryCard component
import PaymentCard from '../../Components/card/payement/PaymentCard';
import './checkout.css'; // Import the CSS

const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>No product to checkout</div>;
  }

  return (
    <div className="checkout-container">
      <Navbar />
      <div className="checkout-cards">
        <div className="shipping-card">
          <ShippingAddressCard />
        </div>

        <div className="order-summary-card">
          <OrderSummaryCard
            image={product.image}
            productName={product.itemName}
            brandName={product.brandName}
            price={product.price}
          />
        </div>
      </div>

      <div className="payment-card">
        <PaymentCard />
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;