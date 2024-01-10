import React, { useState } from 'react';
import { Button, TextField, Divider } from '@mui/material';
import './CheckoutPage.css'; 
import {useNavigate} from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
  });

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleShippingSubmit = (event) => {
    event.preventDefault();
    console.log('Shipping Details:', shippingDetails);
  };

  const handleCardSubmit = (event) => {
    event.preventDefault();
    console.log('Card Details:', cardDetails);
  };

  return (
    <div  className="paymentContainer">
      {/* Left Container - Shipping Details */}
      <form onSubmit={handleShippingSubmit} className="component">
        <p className="order-title">
          <b>Shipping Details</b>
        </p>

        <TextField
          required
          placeholder="First name"
          style={{ width: '100%', height: '5%' , paddingBottom: '15px'  }}
          value={shippingDetails.firstName}
          onChange={(event) => {
            setShippingDetails((prevState) => ({
              ...prevState,
              firstName: event.target.value,
            }));
          }}
        />

        <TextField
          required
          placeholder="Last name"
          style={{ width: '100%', height: '5%' , paddingBottom: '15px'  }}
          value={shippingDetails.lastName}
          onChange={(event) => {
            setShippingDetails((prevState) => ({
              ...prevState,
              lastName: event.target.value,
            }));
          }}
        />

        <TextField
          required
          placeholder="Address"
          style={{ width: '100%', height: '5%' , paddingBottom: '15px'  }}
          value={shippingDetails.address}
          onChange={(event) => {
            setShippingDetails((prevState) => ({
              ...prevState,
              address: event.target.value,
            }));
          }}
        />

        <TextField
          required
          placeholder="City"
          style={{ width: '100%' , height: '5%' , paddingBottom: '15px' }}
          value={shippingDetails.city}
          onChange={(event) => {
            setShippingDetails((prevState) => ({
              ...prevState,
              city: event.target.value,
            }));
          }}
        />

        <TextField
          required
          placeholder="ZIP"
          style={{ width: '100%' , height: '5%' , paddingBottom: '15px' }}
          value={shippingDetails.zip}
          onChange={(event) => {
            setShippingDetails((prevState) => ({
              ...prevState,
              zip: event.target.value,
            }));
          }}
        />

        <Button variant="contained" type="submit" className="buy-button">
          Continue to Payment
        </Button>
      </form>

      {/* Right Container - Card Details */}
      <form onSubmit={handleCardSubmit} className="component">
        <p className="order-title">
          <b>Card Details</b>
        </p>

        <TextField
          required
          placeholder="Card Number"
          style={{ width: '100%', height: '5%' , paddingBottom: '15px' }}
          value={cardDetails.cardNumber}
          onChange={(event) => {
            setCardDetails((prevState) => ({
              ...prevState,
              cardNumber: event.target.value,
            }));
          }}
        />

        <TextField
          required
          placeholder="Expiration Date"
          style={{ width: '100%', height: '5%' , paddingBottom: '15px'  }}
          value={cardDetails.expirationDate}
          onChange={(event) => {
            setCardDetails((prevState) => ({
              ...prevState,
              expirationDate: event.target.value,
            }));
          }}
        />

        <TextField
          required
          placeholder="CVV"
          style={{ width: '100%' , height: '5%' , paddingBottom: '15px' }}
          value={cardDetails.cvv}
          onChange={(event) => {
            setCardDetails((prevState) => ({
              ...prevState,
              cvv: event.target.value,
            }));
          }}
        />

        <Button variant="contained" type="submit" className="buy-button" onClick={() => {navigate('/confirmation');}}>
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default CheckoutPage;
