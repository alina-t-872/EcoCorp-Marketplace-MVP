import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../fragments/ProductCard';

const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 20.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 15.99,
      image: 'https://via.placeholder.com/150',
    },
];

function HomePage() {
    return (
        <Container className="mt-5">
      <h1>Sale Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;