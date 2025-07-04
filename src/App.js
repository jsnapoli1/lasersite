import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product1" element={<Product1 />} />
            <Route path="/product2" element={<Product2 />} />
            <Route path="/product3" element={<Product3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 