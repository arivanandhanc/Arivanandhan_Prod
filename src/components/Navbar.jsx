import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const words = "Happiness Crowns Success".split(" ");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = (e) => e.target.id === "menu-overlay" && setIsOpen(false);

  return (
    <header style={styles.header}>
      {/* matching left-right padding with footer */}
      <div style={styles.navContainer}>
        {/* Row: Title + Hamburger */}
        <div style={styles.row}>
          <motion.div className="nav-title" style={styles.title}>
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                style={{ display: "inline" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
              >
                {word}
                {idx < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </motion.div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={styles.hamburger}
            type="button"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        id="menu-overlay"
        style={{
          ...styles.overlay,
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? "1" : "0",
        }}
        onClick={closeMenu}
      >
        <nav
          style={{
            ...styles.sidebar,
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.link} onClick={toggleMenu}>
                <FaHome style={styles.icon} /> Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/education" style={styles.link} onClick={toggleMenu}>
                <FaGraduationCap style={styles.icon} /> Education
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/experience" style={styles.link} onClick={toggleMenu}>
                <FaBriefcase style={styles.icon} /> Experience
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link
                to="/skills-projects"
                style={styles.link}
                onClick={toggleMenu}
              >
                <FaCode style={styles.icon} /> Skills & Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// ✅ Unified spacing with footer
const styles = {
  header: {
    backgroundColor: "#000000",
    color: "white",
    padding: "clamp(18px, 3vw, 30px) clamp(16px, 4vw, 48px)", // same as footer
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxSizing: "border-box",
  },

  navContainer: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
  },

  row: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: "clamp(1.1rem, 4.8vw, 2rem)",
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: 1.2,
    flex: "1 1 auto",
    minWidth: 0,
    textAlign: "left",
  },

  hamburger: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "#FFFFFF",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "8px",
    minHeight: 44,
    lineHeight: 1,
    zIndex: 1003,
  },

  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "300px",
    height: "100vh",
    backgroundColor: "#000000",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease-in-out",
    zIndex: 999,
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "flex-start",
    transition: "opacity 0.3s ease-in-out",
  },

  navList: {
    listStyle: "none",
    padding: 0,
  },

  navItem: { margin: "1.5rem 0" },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
  },

  icon: { marginRight: "0.5rem" },
};

export default Navbar;
