import { useState } from 'react';
import './App.css';
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import Checkout from './pages/checkout/Checkout';
import CartProvider from './CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;