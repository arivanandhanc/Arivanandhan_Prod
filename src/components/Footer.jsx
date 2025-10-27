import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FOOTER_HEIGHT = 96;

const Footer = () => {
  const [isSmall, setIsSmall] = useState(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 640px)").matches : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsSmall(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
  }, []);

  const rootStyle = {
    backgroundColor: "#000",
    color: "#fff",
    width: "100%",
    padding: "16px clamp(20px, 4vw, 64px)",
    boxSizing: "border-box",
    // ✅ Removed fixed positioning
    borderTop: "1px solid rgba(255,255,255,0.08)",
    fontFamily: `'Inter', system-ui, sans-serif`,
    backdropFilter: "saturate(120%) blur(4px)",
    height: `${FOOTER_HEIGHT}px`,
  };

  const containerStyle = {
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto",
    gridTemplateAreas: `
      "links   empty1"
      "empty2  meta"
    `,
    alignItems: "center",
    gap: isSmall ? "10px" : "14px",
  };

  const navStyle = {
    gridArea: "links",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "clamp(14px, 2vw, 36px)",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "clamp(15px, 2.4vw, 18px)",
    fontWeight: 600,
    transition: "color 0.25s ease",
    letterSpacing: "0.3px",
  };

  const metaStyle = {
    gridArea: "meta",
    display: "flex",
    flexDirection: "column",
    alignItems: isSmall ? "center" : "flex-end",
    textAlign: isSmall ? "center" : "right",
    gap: "6px",
  };

  const quote = {
    fontStyle: "italic",
    color: "#cccccc",
    fontSize: "clamp(13px, 1.8vw, 15px)",
    fontWeight: 400,
    letterSpacing: "0.2px",
  };

  const copy = { fontSize: "clamp(14px, 2vw, 16px)", opacity: 0.9 };

  return (
    <footer style={rootStyle} aria-label="Site Footer">
      <div style={containerStyle}>
        <nav style={navStyle} aria-label="Footer Navigation">
          <FooterLink to="/" style={linkStyle}>
            Home
          </FooterLink>
          <FooterLink to="/skills-projects" style={linkStyle}>
            Skills &amp; Projects
          </FooterLink>
        </nav>
        <div style={{ gridArea: "empty1" }} aria-hidden />
        <div style={{ gridArea: "empty2" }} aria-hidden />
        <div style={metaStyle}>
          <span style={copy}>
            © {new Date().getFullYear()} Arivanandhan Chitheshwaran. All rights reserved.
          </span>
          <span style={quote}>&ldquo;Code. Create. Inspire.&rdquo;</span>
        </div>
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
