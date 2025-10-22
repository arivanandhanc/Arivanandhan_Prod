import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const isSmall = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 640px)").matches;
  }, []);

  const rootStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    width: "100%",
    padding: "clamp(20px, 3vw, 36px) clamp(20px, 4vw, 64px)", // ⬆️ slightly more vertical + side padding
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxSizing: "border-box",

    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 999,
    fontFamily: `'Inter', system-ui, sans-serif`,
  };

  const containerStyle = {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.9rem",
  };

  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: isSmall ? "center" : "flex-start",
    gap: "clamp(14px, 2vw, 36px)",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "clamp(15px, 2.4vw, 18px)", // ⬆️ increased font
    fontWeight: 600,
    transition: "color 0.3s ease",
    letterSpacing: "0.3px",
  };

  const bottomStyle = {
    display: "flex",
    justifyContent: isSmall ? "center" : "flex-end",
    alignItems: "center",
    fontSize: "clamp(14px, 2vw, 16px)", // ⬆️ bumped up
    opacity: 0.9,
  };

  const quoteStyle = {
    display: "flex",
    justifyContent: isSmall ? "center" : "flex-end",
    fontStyle: "italic",
    color: "#cccccc",
    fontSize: "clamp(13px, 1.8vw, 15px)", // slightly larger & smoother scaling
    fontWeight: 400,
    letterSpacing: "0.2px",
  };
 const quoteStyle1 = {
    display: "flex",
    justifyContent: isSmall ? "center" : "flex-start",
    fontStyle: "italic",
    color: "#cccccc",
    fontSize: "clamp(13px, 1.8vw, 15px)", // slightly larger & smoother scaling
    fontWeight: 400,
    letterSpacing: "0.2px",
  };
  return (
    <footer style={rootStyle} aria-label="Site Footer">
      <div style={containerStyle}>
        <nav style={navStyle} aria-label="Footer Navigation">
          <FooterLink to="/" style={linkStyle}>Home</FooterLink>
          <FooterLink to="/education" style={linkStyle}>Education</FooterLink>
          <FooterLink to="/experience" style={linkStyle}>Experience</FooterLink>
          <FooterLink to="/skills-projects" style={linkStyle}>Skills &amp; Projects</FooterLink>
          <a
            href="https://www.linkedin.com/in/arivanandhan/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = "#00bfff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          
        </nav>
        <div style={quoteStyle1}>“Education is the most powerful weapon”</div>


        <div style={bottomStyle}>
          © 2024 Arivanandhan Chitheshwaran. All rights reserved.
        </div>

        <div style={quoteStyle}>“Code. Create. Inspire.”</div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, style, children }) => (
  <Link
    to={to}
    style={style}
    onMouseOver={(e) => (e.currentTarget.style.color = "#00bfff")}
    onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
  >
    {children}
  </Link>
);

export default Footer;
