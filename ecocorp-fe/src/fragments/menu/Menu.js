// Menu.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Menu = () => {
  const aboutUrl = "https://dutualincalin.github.io/EcoCorp-Marketplace/#/fiki";
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">EcoCorp MarketPlace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/viewProducts">Home</Nav.Link>
            <Nav.Link href={aboutUrl}>About</Nav.Link>
            {/* <Nav.Link href="#">Contact</Nav.Link> */}
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Other content for your page */}
    </div>
  );
};

export default Menu;
