import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import './Checkout.css';

const Checkout = () => {
  const [isOrderProcessed, setIsOrderProcessed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment processing
    setIsOrderProcessed(true);
    setTimeout(() => {
      setIsOrderProcessed(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <Container>
      <h1 className="text-center my-5">Checkout</h1>
      {isOrderProcessed && (
        <div className="text-center my-3">
          <p>Your order has been processed!</p>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <h3>Shipping Information</h3>
        <Form.Group controlId="shippingName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group controlId="shippingAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required />
        </Form.Group>
        <Form.Group controlId="shippingCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" required />
        </Form.Group>
        <Form.Group controlId="shippingPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter your postal code" required />
        </Form.Group>
        <h3>Payment Information</h3>
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your card number" required />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="cardExpiry">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cardCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control type="text" placeholder="CVC" required />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" variant="primary">Complete Checkout</Button>
      </Form>
    </Container>
  );
};

export default Checkout;
