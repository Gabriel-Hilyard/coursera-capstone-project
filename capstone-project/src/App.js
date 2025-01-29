import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Highlights from './Highlights.js';
import Reviews from './Reviews.js';
import About from './About.js';
import Reservations from './Reservations';
import './App.css';

function Home() {
  return (
    <>
      <Main />
      <Highlights />
      <About />
      <Reviews />
    </>
  );
}

function App() {
  return (
    <Router>
      <Nav /> {/* Navbar stays on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Renders all homepage components */}
        <Route path="/reservations" element={<Reservations />} /> {/* Renders only the Reservations page */}
      </Routes>
      <Footer /> {/* Footer stays on all pages */}
    </Router>
  );
}

export default App;