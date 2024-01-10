import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.png';
import wishlistIcon from '../assets/wishlist.png';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '20rem', margin: '20px' }}>
      <Link style={{color: "black"}} to={ `/products/${product.id}`}>
        <Card.Img style={{ paddingLeft: '10px',height: '300px'}} variant="top" src={product.image} alt={product.title}  />
      </Link>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}RON</Card.Text>
        <Button onClick={() => {}} variant="primary" style={{ marginRight: '10px' }}>
          <img src={cartIcon} alt=" " style={{height: "1.5rem", paddingRight: "10px"}} />
          Add to Cart
        </Button>
        <Button onClick={() => {}} variant="secondary">
          <img src={wishlistIcon}  style={{height: "1.5rem", paddingRight: "10px"}} alt=" " />
          Wishlist
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
