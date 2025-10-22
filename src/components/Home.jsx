import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import image from "./arivu.png";
import "../App.css";

const Home = () => {
  const [isSmall, setIsSmall] = useState(false);

  // Live breakpoint detection
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsSmall(e.matches);
    handler(mq);
    mq.addEventListener
      ? mq.addEventListener("change", handler)
      : mq.addListener(handler);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", handler)
        : mq.removeListener(handler);
    };
  }, []);

  // Reserve a gutter so fixed socials never overlap content on desktop
  const SOCIAL_GUTTER = "56px";
const quoteStyle1 = {
  display: "flex",
  justifyContent: isSmall ? "center" : "flex-start",
  fontStyle: "italic",
  color: "#cccccc",
  fontSize: "clamp(13px, 1.8vw, 15px)", // slightly larger & smoother scaling
  fontWeight: 400,
  letterSpacing: "2px",

  // ✅ Added proper spacing between adjacent elements
  marginTop: "clamp(10px, 2vw, 18px)",   // space from the element above
  marginBottom: "clamp(10px, 2vw, 18px)", // space from the element below
};

  return (
    <section
      className="home-wrap"
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",

        // same edge padding as header/footer
        padding: "clamp(18px, 3vw, 30px) clamp(16px, 4vw, 48px)",

        // clear the fixed header (your header + page top padding)
        paddingTop: "calc(120px + clamp(18px, 3vw, 30px))",

        // add left gutter on desktop for the fixed socials
        paddingLeft: isSmall
          ? "clamp(16px, 4vw, 48px)"
          : `calc(clamp(16px, 4vw, 48px) + ${SOCIAL_GUTTER})`,

        // add right gutter for the absolute hero image on desktop
        paddingRight: isSmall ? "clamp(16px, 4vw, 48px)" : "min(45vw, 600px)",
      }}
    >
      {/* Socials: fixed & centered on desktop; inline row on small screens */}
      {isSmall ? (
        <div style={styles.socialsMobile}>
          {SOCIALS.map(({ Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Icon style={styles.socialIcon} />
            </a>
          ))}
        </div>
      ) : (
        <div style={styles.fixedSocials}>
          {SOCIALS.map(({ Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Icon style={styles.socialIcon} />
            </a>
          ))}
        </div>
      )}

      {/* Right hero image (hidden on mobile via your CSS) */}
      <div
        className="home-image"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "auto",
          maxWidth: "600px",
          overflow: "hidden",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <img src={image} alt="Arivanandhan Chitheshwaran" style={{ width: "auto", height: "100%" }} />
      </div>

      {/* Content (centered between header/footer + gutters) */}
      <div
        className="home-content"
        style={{
          position: "relative",
          zIndex: 2,
          color: "#ffffff",
          maxWidth: "min(100%, 920px)",
          margin: "0 auto",
          paddingLeft: isSmall ? "clamp(18px, 4vw, 30px)" : 0,
          paddingRight: isSmall ? "clamp(18px, 4vw, 30px)" : 0,
          boxSizing: "border-box",

          // ⬇️ Center the whole block vertically & horizontally
          minHeight: "calc(100vh - (120px + clamp(18px, 3vw, 30px)))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 9vw, 6rem)",
            fontWeight: "bold",
            margin: "0 0 0 0",
            lineHeight: 1.15,
            wordBreak: "break-word",
            // removed marginTop to allow true centering
          }}
        >
          ARIVANANDHAN CHITHESHWARAN
        </h1>

        <div style={quoteStyle1}>“Be the bridge between what you know and what the world needs”</div>
        <div
          style={{
            color: "#cccccc",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            marginBottom: "2rem",
            maxWidth: "min(90%, 720px)",
            marginInline: "auto",
          }}
        >
          
        </div>

        {/* Social Buttons */}
        <div
          style={{
            display: "flex",
            gap: "clamp(10px, 2vw, 16px)",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            maxWidth: "min(100%, 720px)",
            marginInline: "auto",
          }}
        >
          {BUTTONS.map((b) => (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                padding: "clamp(8px, 1.6vw, 12px) clamp(14px, 2.4vw, 18px)",
                border: "2px solid #ffffff",
                borderRadius: "8px",
                transition: "background 0.3s ease, transform 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                minHeight: 44,
                boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = b.hover;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {b.icon} {b.label}
            </a>
            
          ))}

          <div style={quoteStyle1}>“Learn deeply, act kindly, and teach freely — that’s how the world truly changes.”</div>
          <TypeAnimation
            sequence={[
              "Welcome to Arivu's site !",
              3000,
              "Ready to contribute to something good for the world ? Let’s connect. ",
              3000,
            ]}
            speed={80}
            deletionSpeed={100}
            style={{ whiteSpace: "pre-line" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
};

const SOCIALS = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/arivanandhan/" },
  { Icon: FaFacebook, href: "https://www.facebook.com/Mr.C.Arivanandhan/" },
  { Icon: FaInstagram, href: "https://www.instagram.com/mr.coimbatorian/" },
  { Icon: FaTwitter, href: "https://x.com/mr_arivanandhan" },
  { Icon: FaGithub, href: "https://github.com/arivanandhanc" },
];

const BUTTONS = [
  
  {
    href: "mailto:arivanandhan33@gmail.com",
    label: "Email",
    icon: <FaEnvelope size={20} color="#ffffff" />,
    hover: "#ff0000",
  },
  {
    href: "https://forms.gle/W2wP1qwjFfoVA8Be7",
    label: "✍️ Your Words!",
    icon: null,
    hover: "#007acc",
  },
];

const styles = {
  // Desktop: fixed socials centered; Mobile: handled inline in component
  fixedSocials: {
    position: "fixed",
    top: "50%",
    left: "clamp(10px, 2vw, 36px)",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(16px, 3vh, 28px)",
    alignItems: "center",
    zIndex: 999,
  },
  socialsMobile: {
    position: "static",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  },
  socialLink: { display: "inline-flex" },
  socialIcon: {
    fontSize: "clamp(18px, 2.4vw, 22px)",
    color: "#fff",
    cursor: "pointer",
    transition: "color 0.3s ease, transform 0.2s ease",
  },
};

export default Home;
