import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Card, Form, Carousel } from 'react-bootstrap'; // Import Bootstrap components

const ProfilePage = () => {
    return (
      <Container style={{height: "100%"}} className="mt-5">
      <Row>
        <Col md={4}>
          {/* User Info Card */}
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="User Avatar" />
            <Card.Body>
              <Card.Title>User Name</Card.Title>
              <Card.Text style={{fontSize: "medium"}}>Email: user@example.com</Card.Text>
              <Card.Text style={{fontSize: "medium"}}>Type of person: Natural/Legal </Card.Text>
            </Card.Body>
          </Card>

          {/* My Orders Card */}
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>My Orders</Card.Title>
              <Carousel>
                {/* Add elements inside Carousel.Item for each product in My Orders */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/200x100"
                    alt="First Product"
                  />
                  {/* Add other product details */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/200x100"
                    alt="Second Product"
                  />
                  {/* Add other product details */}
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>

          {/* Wishlist Card */}
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Wishlist</Card.Title>
              <Carousel>
                {/* Add elements inside Carousel.Item for each product in Wishlist */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/200x100"
                    alt="First Product in Wishlist"
                  />
                  {/* Add other product details */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/200x100"
                    alt="Second Product in Wishlist"
                  />
                  {/* Add other product details */}
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="ps-md-5">
          {/* User Details */}
          <h2>User Profile</h2>
          <Form style={{height: "70%"}}>
            {/* Reset Username */}
            <Form.Group className="col-4 mb-4">
              <Form.Label>Reset Username</Form.Label>
              <Form.Control type="text" placeholder="New Username" />
            </Form.Group>

            {/* Reset Email Address */}
            <Form.Group className="col-4 mb-4">
              <Form.Label>Reset Email Address</Form.Label>
              <Form.Control type="email" placeholder="New Email Address" />
            </Form.Group>

            {/* Reset Password */}
            <Form.Group className="col-4 mb-4">
            <Form.Label>Reset Password</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="New Password" id="resetPassword" />
              <div className="input-group-append" style={{ marginLeft: '10px', alignSelf: 'baseline' }}>
                <Form.Check
                  type="checkbox"
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="bi bi-eye" style={{ fontSize: '1.25em', marginLeft: '5px', marginTop: '-2px' }}></span>
                      <span className="bi bi-eye-slash d-none" style={{ fontSize: '1.25em', marginLeft: '5px', marginTop: '-2px' }}></span>
                    </div>
                  }
                  onChange={(e) => {
                    const passwordInput = document.getElementById('resetPassword');
                    const eyeIcon = document.querySelector('.bi-eye');
                    const eyeSlashIcon = document.querySelector('.bi-eye-slash');

                    if (passwordInput && eyeIcon && eyeSlashIcon) {
                      passwordInput.type = e.target.checked ? 'text' : 'password';
                      eyeIcon.classList.toggle('d-none', e.target.checked);
                      eyeSlashIcon.classList.toggle('d-none', !e.target.checked);
                    }
                  }}
                />
              </div>
            </div>
          </Form.Group>

             <button type="submit" className="btn btn-primary me-5 mb-5">
             Update Profile
            </button>
            </Form>


            <div className="d-flex flex-column align-items-start">
            {/* Log Out Button */}
            <button type="button" className="btn btn-secondary mt-4 mb-3">
              Log Out
            </button>

            {/* Delete Account Button*/}
            <button type="button" className="btn btn-danger mt-1">
              Delete Account
            </button>
            </div>

        </Col>
      </Row>
    </Container>
    );
}

export default ProfilePage;