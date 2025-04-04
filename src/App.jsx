import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Front from './components/Front';
import Header from './components/Header';
import CardsCarousel from './components/CardsCarousel';

import './App.css';
import './tailwind.css';
import './styles/CardsCarousel.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <div className="App">
        <CardsCarousel />
      </div>
    </Router>
  );
}

export default App;
