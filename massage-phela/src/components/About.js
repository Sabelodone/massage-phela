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
      <p>
            Explore our state-of-the-art facilities and unwind in a tranquil
            environment designed to enhance your wellness journey. From Swedish
            massages to aromatherapy sessions, we offer a wide range of
            treatments tailored to meet your unique needs.
          </p>
    </Container>
  );
};

export default About;

