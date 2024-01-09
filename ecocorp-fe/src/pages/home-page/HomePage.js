import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../fragments/ProductCard';

const products = [
    {
      id: 1,
      title: 'Calculator hp compaq 8200 elite',
      price: 177.80,
      image: 'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 15.99,
      image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        title: 'Product 2',
        price: 15.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        title: 'Product 2',
        price: 15.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        title: 'Product 2',
        price: 15.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 6,
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