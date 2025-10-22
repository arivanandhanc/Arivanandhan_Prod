import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import SkillsProjects from './components/SkillsProjects';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'; // Keep only if used
function App() {
  return (
    <Router>
      {/* Global responsive helpers */}
<style>{`
  :root { --pad: clamp(18px, 3vw, 30px) clamp(16px, 4vw, 48px); } /* CHANGED */

  /* (keep the rest exactly as-is) */
  html, body { overflow-x: hidden; }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
  /* ===== Education ===== */
  .edu-layout { padding: var(--pad); }
  ...
  .home-wrap { padding: var(--pad); } /* Home uses this */
  ...
  .section-container { padding: var(--pad); max-width: min(100%, 900px); margin: 0 auto; }
`}</style>

<div
  style={{
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }}
>
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
