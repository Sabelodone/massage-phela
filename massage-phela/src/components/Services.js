import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa, faHandHoldingHeart, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const [showDetails, setShowDetails] = useState({
    swedishMassage: false,
    deepTissueMassage: false,
    aromatherapyMassage: false,
  });

  const toggleDetails = (serviceName) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [serviceName]: !prevState[serviceName],
    }));
  };

  return (
    <Container id="services" className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="service-card" onClick={() => toggleDetails('swedishMassage')}>
            <Card.Body>
              <div className="service-icon">
                <FontAwesomeIcon icon={faSpa} size="3x" />
              </div>
              <Card.Title className="mt-3">Swedish Massage</Card.Title>
              {showDetails.swedishMassage && <Card.Text>Relaxing and rejuvenating massage technique.</Card.Text>}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card" onClick={() => toggleDetails('deepTissueMassage')}>
            <Card.Body>
              <div className="service-icon">
                <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" />
              </div>
              <Card.Title className="mt-3">Deep Tissue Massage</Card.Title>
              {showDetails.deepTissueMassage && <Card.Text>Focused on relieving muscle tension and pain.</Card.Text>}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card" onClick={() => toggleDetails('aromatherapyMassage')}>
            <Card.Body>
              <div className="service-icon">
                <FontAwesomeIcon icon={faLeaf} size="3x" />
              </div>
              <Card.Title className="mt-3">Aromatherapy Massage</Card.Title>
              {showDetails.aromatherapyMassage && <Card.Text>Combines essential oils with massage therapy.</Card.Text>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;

