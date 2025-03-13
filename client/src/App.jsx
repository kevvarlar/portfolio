import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
  return (
    <div id="app" className="flex flex-col h-screen justify-between">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <div className="mt-10"/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
