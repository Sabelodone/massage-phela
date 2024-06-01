// src/components/About.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container id="about" className="py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p>
        At Massage Phela, we believe in providing the best massage therapy
        services to help you relax and rejuvenate. Our therapists are
        experienced and dedicated to ensuring your well-being.
      </p>
    </Container>
  );
};

export default About;
