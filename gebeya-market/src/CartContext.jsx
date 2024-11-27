import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const saveForLater = (product) => {
    setSavedItems((prevItems) => [...prevItems, product]);
    setCartItems((prevItems) => prevItems.filter((item) => item !== product));
  };

  const checkout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, saveForLater, checkout, savedItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
