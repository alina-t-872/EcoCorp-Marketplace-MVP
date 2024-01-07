import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateAccountPage from './pages/create-account-page/CreateAccountPage';
import HomePage from './pages/home-page/HomePage';
import CartPage from './pages/cart-page/CartPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import PaymentPage from './pages/payment-page/PaymentPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import ProductPage from './pages/product-page/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateAccountPage />}/>
        <Route exact path="/viewProducts" element={<HomePage />}/>
        <Route exact path="/cart" element={<CartPage />}/>
        <Route exact path="/checkout" element={<CheckoutPage />}/>
        <Route exact path="/payment" element={<PaymentPage />}/>
        <Route exact path="/profile" element={<ProfilePage />}/>
        <Route exact path="/products/:id" element={<ProductPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
