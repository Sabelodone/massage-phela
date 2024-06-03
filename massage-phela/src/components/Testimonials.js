import React, { useEffect, useState } from 'react';
import './Testimonials.css'; // Import your CSS file for styling

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The massage therapists here are simply amazing! I've never felt so relaxed.",
      author: "- John Doe"
    },
    {
      quote: "The ambiance of Massage Phela is perfect for unwinding after a stressful week.",
      author: "- Jane Smith"
    },
    {
      quote: "I've been a regular client at Massage Phela for years, and their service has never disappointed.",
      author: "- Michael Johnson"
    },
    {
      quote: "Aromatherapy sessions here are a game-changer! Highly recommended.",
      author: "- Emily White"
    },
    {
      quote: "I always leave Massage Phela feeling rejuvenated and refreshed. Amazing experience!",
      author: "- Sarah Brown"
    }
  ];

  useEffect(() => {
    // Check if there are testimonials before setting the active index
    if (testimonials.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      }, 5000);
  
      setTimeout(() => {
        clearInterval(intervalId);
        setCurrentIndex(-1); // Reset index after 5 seconds
      }, 5000);
  
      return () => clearInterval(intervalId);
    }
  }, [testimonials.length]); // Include testimonials.length in the dependency array
  
  return (
    <section id="testimonial-section" className="testimonials">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <p>{testimonial.quote}</p>
            <p className="author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
