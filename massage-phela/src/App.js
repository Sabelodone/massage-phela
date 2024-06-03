import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Testimonials from './components/Testimonials';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <BookingModal />
    </div>
  );
};

export default App;
