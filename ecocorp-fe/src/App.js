import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<CreateAccountPage />}/>
        <Route exact path="/viewProducts" element={<HomePage />}/>
        <Route exact path="/cart" element={<CartPage />}/>
        <Route exact path="/checkout" element={<CheckoutPage />}/>
        <Route exact path="/payment" element={<PaymentPage />}/>
        <Route exact path="/profile" element={<ProfilePage />}/>
        <Route exact path="/products/:id" element={<ProductPage />}/>
        <Route exact path="/confirmation" element={<ConfirmationPage />}/>
      </Routes>
    </Router>

  );
}

export default App;
