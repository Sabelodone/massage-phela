// src/components/Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  return (
    <Container id="services" className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Swedish Massage</Card.Title>
              <Card.Text>Relaxing and rejuvenating massage technique.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Deep Tissue Massage</Card.Title>
              <Card.Text>Focused on relieving muscle tension and pain.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Aromatherapy Massage</Card.Title>
              <Card.Text>Combines essential oils with massage therapy.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
