import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { IconButton } from "rsuite";
import "rsuite/dist/rsuite.min.css"; 
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useNavigate} from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const aboutUrl = "https://dutualincalin.github.io/EcoCorp-Marketplace/#/fiki";
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{paddingLeft: "10px"}} href="/">EcoCorp MarketPlace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/viewProducts">Home</Nav.Link>
            {/* <Nav.Link href={aboutUrl}>About</Nav.Link> */}
            {/* <Nav.Link href="#">Contact</Nav.Link> */}
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button style={{marginRight: "20px"}} onClick={() => {navigate('/cart');}}>
            <ShoppingCartIcon style={{alignSelf: "flex-end"}}/>
        </button> 
      </Navbar>
    </div>
  );
};

export default Menu;
