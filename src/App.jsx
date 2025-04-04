import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Front from './components/Front';
import Header from './components/Header';
import CardsCarousel from './components/CardsCarousel';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import './App.css';
import './tailwind.css';
import './styles/CardsCarousel.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path="*" element={<Navigate to="/" />} />
       <Route path="/" element={<Front />} /> {/* Set Front as the home page */}
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/services" element={<Services />} /> {/* Add Services route */}
      </Routes>

    </Router>
  );
}

export default App;
