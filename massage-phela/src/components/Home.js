import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="home">
      <Container fluid>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={8} lg={6}>
            <div className="custom-jumbotron">
              <h1>Welcome to Massage Phela</h1>
              <p>Your relaxation and wellness is our priority.</p>
              <Button variant="outline-light" className="mt-3 custom-button" onClick={handleShow}>Book Now</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Massage Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formDate" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formTime" className="mt-3">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Any additional details" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;

