import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Services />
        <About />
        <Gallery />
      </main>
      <Footer />
      <BookingModal />
    </div>
  );
};

export default App;
