// src/components/Gallery.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Gallery.css';

const images = [
  { src: '/image1.jpg', alt: 'Image 1', link: '#image1' },
  { src: '/image2.jpg', alt: 'Image 2', link: '#image2' },
  { src: '/image4.jpg', alt: 'Image 4', link: '#image4' },
  { src: '/image5.jpg', alt: 'Image 5', link: '#image5' },
];

const Gallery = () => {
  return (
    <Container id="gallery" className="py-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <Row>
        {images.map((image, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <a href={image.link}>
                <Card.Img variant="top" src={image.src} alt={image.alt} />
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
