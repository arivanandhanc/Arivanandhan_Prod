import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import SkillsProjects from './components/SkillsProjects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills-projects" element={<SkillsProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;