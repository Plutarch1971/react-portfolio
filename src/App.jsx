import './App.css'
import Header from './components/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

function App() {

  return (
    <>
    <Header/>  
    <Content />
    <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </Router>         
    <Footer />
    </>
  );
}

export default App
