import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div id="home">
      <Container fluid>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={8} lg={6}>
            <div className="custom-jumbotron">
              <h1>Welcome to Massage Phela</h1>
              <p>Your relaxation and wellness is our priority.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;