import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGraduationCap, FaBriefcase, FaCode, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const text = "Happiness  Crowns  Success"
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = (e) => e.target.id === "menu-overlay" && setIsOpen(false);

  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        {/* Header Text — stable; class for responsive title sizing */}
        <motion.div className="nav-title"
          style={{
            fontSize: "1.98rem",
            fontWeight: "bold",
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            color: "#FFFFFF",
            textAlign: "left",
            maxWidth: "100%",
            justifyContent: "flex-start",
            lineHeight: "2.5rem",
            paddingRight: "25px",
            marginRight: "25px",
          }}
        >
          {text.map((letter, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Hamburger Menu */}
        <span className="nav-hamburger" style={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </span>
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
              <Link to="/skills-projects" style={styles.link} onClick={toggleMenu}>
                <FaCode style={styles.icon} /> Skills & Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#000000",
    color: "white",
    padding: "1rem 0",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: "1000",
    minHeight: "5%",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 15px",
    position: "relative",
  },
  sidebar: {
    position: "fixed",
    textAlign: "left",
    top: "0",
    left: "0",
    width: "300px",
    height: "100vh",
    backgroundColor: "#000000",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease-in-out",
    transform: "translateX(-100%)",
    zIndex: "999",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "flex-start",
    transition: "opacity 0.01s ease-in-out",
  },
  navList: {
    listStyle: "none",
    textAlign: "left",
    padding: "0",
  },
  navItem: {
    margin: "1.5rem 0",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  icon: {
    marginRight: "0.5rem",
  },
  hamburger: {
    fontSize: "2.5rem",
    cursor: "pointer",
    position: "absolute",
    top: "80%",
    right: "60px",
    transform: "translateY(-50%)",
    zIndex: "1003",
    color: "#FFFFFF",
    display: "block",
    maxHeight: "100%",
    minHeight: 44,
    padding: "8px", // better tap target
  },
};

export default Navbar;
