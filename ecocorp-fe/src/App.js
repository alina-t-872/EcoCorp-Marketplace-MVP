import React from "react";
import {HashRouter  as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './fragments/menu/Menu';
import CreateAccountPage from './pages/create-account-page/CreateAccountPage';
import HomePage from './pages/home-page/HomePage';
import CartPage from './pages/cart-page/CartPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import PaymentPage from './pages/payment-page/PaymentPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import ProductPage from './pages/product-page/ProductPage';
import ConfirmationPage from './pages/confirmation-page/ConfirmationPage';

function App() {
  return (
    <Router basename="/EcoCorp-Marketplace-MVP/#">
      <Menu/>
      {/* <Routes> */}
        <Route path="/" element={<CreateAccountPage />}/>
        <Route path="/viewProducts" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
        <Route path="/payment" element={<PaymentPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/products/:id" element={<ProductPage />}/>
        <Route path="/confirmation" element={<ConfirmationPage />}/>
      {/* </Routes> */}
    </Router>

  );
}

export default App;
