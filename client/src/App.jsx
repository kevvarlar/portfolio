import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './components/about/AboutMe.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import ContactMe from './components/contact/ContactMe';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div id="app" className="flex flex-col h-screen justify-between">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
