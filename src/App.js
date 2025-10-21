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
      {/* Global responsive helpers */}
      <style>{`
        :root { --pad: clamp(16px, 4vw, 32px); }

        /* Prevent horizontal scroll due to fixed/abs elements */
        html, body { overflow-x: hidden; }

        /* Respect reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }

        /* ===== Education ===== */
        .edu-layout { padding: var(--pad); }
        @media (max-width: 1024px) {
          .edu-content { padding-left: 0 !important; max-width: 100% !important; }
          .edu-timeline { left: 0 !important; }
        }
        @media (max-width: 768px) {
          .edu-sidebar {
            position: static !important;
            flex-direction: row !important;
            gap: 24px !important;
            justify-content: center !important;
            margin-bottom: 16px !important;
          }
          .edu-icon { font-size: 20px !important; }
        }

        /* ===== Navbar ===== */
        @media (max-width: 768px) {
          .nav-hamburger { right: 16px !important; top: 50% !important; }
          .nav-title { font-size: clamp(1.2rem, 6vw, 1.6rem) !important; line-height: 2rem !important; }
        }

        /* ===== Home ===== */
        .home-wrap { padding: var(--pad); }
        .home-image { width: min(45vw, 600px); }
        @media (max-width: 1024px){
          .home-image { width: 50vw; }
        }
        @media (max-width: 768px){
          .home-image {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            order: 2 !important;
            margin-top: 16px !important;
          }
          .home-content { max-width: 100% !important; }
        }

        /* ===== Skills & Projects ===== */
        .section-container { padding: var(--pad); max-width: min(100%, 900px); margin: 0 auto; }
      `}</style>

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
