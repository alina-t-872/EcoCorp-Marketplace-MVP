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
      title: 'Monitor led philips 221v8',
      price: 459.01 ,
      image: 'https://itvivantshop.net/images/detailed/63/Monitor-led-philips-221v8--21-5inch--va-fhd--4ms--75hz--negru_nke7-pp.jpg',
    },
    {
        id: 3,
        title: 'Laptop dell latitude 7280 12.5" fhd',
        price: 1118.60,
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/9/29043/thumb600x600/2779374759/Laptop-dell-latitude-7280-12-5--fhd--intel-core-i5-6300u-3-00ghz--4gb-ddr4--128gb-ssd--webcam--bluetooth--tastatura-ilum.jpg',
    },
    {
        id: 4,
        title: 'Kit tastatura si mouse spacer spds-1691 cu fir',
        price: 37.30,
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/9/19837/thumb600x600/3087620457/Kit-tastatura-si-mouse-spacer-spds-1691-cu-fir--usb--tastatura-multimedia----spkb-169----mouse-optic----spmo-m11---black-----spds-1691-_r4x5-st.jpg',
    },
    {
        id: 5,
        title: 'Monitor lg 24mp400p-b.beu 23.8 inch',
        price: 512.27,
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/5/25268/thumb600x600/70283680/Monitor-lg-24mp400p-b-beu-23-8-inch--panel-type--ips--resolution--1920x1080--aspect-ratio--16-9---refresh-rate-75hz--res.jpg',
    },
    {
        id: 6,
        title: 'Server hp proliant dl385 g7 rackabil 2u',
        price: 1258.60,
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/8/28862/thumb600x600/2945722986/Server-hp-proliant-dl385-g7-rackabil-2u--2x-amd-opteron-12-cores-6172-3-20-ghz--48gb-ddr3--2x-300gb-sas-hdd--2x-psu--hp-.jpg',
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