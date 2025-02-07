import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import Nav from './Components/Nav.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import Highlights from './Components/Highlights.js';
import Reviews from './Components/Reviews.js';
import About from './Components/About.js';
import Reservations from './Components/Reservations';
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