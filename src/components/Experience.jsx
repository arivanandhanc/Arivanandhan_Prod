// Experience.jsx
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./global.css";
const ACCENT = "#ff6b6b";
const FOOTER_HEIGHT = 96;                // ← match your fixed Footer height
const SOCIAL_GUTTER = "56px";            // ← space so fixed socials don’t overlap

const Experience = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsSmall(e.matches);
    handler(mq);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);

  const jobs = [
    {
      company: "Horizontal Digital Pvt. Ltd.",
      title: "Service Desk Associate (Atlassian suit / Newrelic / LamdaTest / Contentstack)",
      date: "May 2024 – Present",
      bullets: ["Successfully started my career here..! Yaahoo"],
    },
    {
      company: "Horizontal Digital Pvt. Ltd.",
      title: "Service Desk Intern",
      date: "Feb 2024 – May 2024",
      bullets: [
        "Startes as intern",
      ],
    },,
    {
      company: "React Developer Intern",
      title: "Frontend Intern (React)",
      date: "June 2023 – Oct 2023",
      bullets: [
        "Developed and deployed the company website using React.js, ensuring a responsive and user-friendly interface.",
      ],
    }
  ];

  return (
    <section
      style={{
        ...styles.wrap,
        paddingTop: "calc(120px + clamp(18px, 3vw, 30px))",               // clear fixed header
        paddingRight: "clamp(16px, 4vw, 48px)",
        paddingBottom: `${FOOTER_HEIGHT + 24}px`,                          // reserve space for fixed footer
        paddingLeft: isSmall ? "clamp(16px, 4vw, 48px)" 
                             : `calc(clamp(16px, 4vw, 48px) + ${SOCIAL_GUTTER})`,
      }}
    >
      {/* Socials */}
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

      {/* Content */}
      <div
        style={{
          ...styles.container,
          maxWidth: isSmall ? "100%" : "min(100%, 920px)",
        }}
      >
        <h2 style={styles.heading}>Work Experience</h2>

        <div style={styles.timeline}>
          {jobs.map((j, idx) => (
            <div
              key={idx}
              style={{
                ...styles.row,
                gridTemplateColumns: isSmall ? "1fr" : styles.row.gridTemplateColumns,
                gap: isSmall ? "12px" : styles.row.gap,
              }}
            >
              {/* rail + dot (hidden on small) */}
              {!isSmall && (
                <div style={styles.railBox}>
                  <div style={styles.rail} />
                  <div style={styles.dot} />
                </div>
              )}

              {/* card */}
              <article
                style={{
                  ...styles.card,
                  borderLeft: isSmall ? `4px solid ${ACCENT}` : styles.card.borderLeft,
                  padding: isSmall ? "clamp(12px, 3.5vw, 16px)" : styles.card.padding,
                }}
              >
                <h3 style={styles.company}>{j.company}</h3>
                <div style={styles.role}>{j.title}</div>
                <div style={styles.date}>{j.date}</div>
                <ul style={styles.ul}>
                  {j.bullets.map((b, i) => (
                    <li key={i} style={styles.li}>{b}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
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

const styles = {
  // PURE BLACK CANVAS
  wrap: {
    background: "#000",         // pure black
    color: "#fff",
    minHeight: "100%",          // allow growth (paired with html/body 100%)
    height: "auto",
    position: "relative",
    boxSizing: "border-box",
  },

  // fixed socials (desktop)
  fixedSocials: {
    position: "fixed",
    top: "50%",
    left: "clamp(10px, 2vw, 36px)",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(16px, 3vh, 28px)",
    alignItems: "center",
    zIndex: 10,
  },

  // socials row (mobile)
  socialsMobile: {
    position: "static",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  },

  socialLink: { display: "inline-flex" },
  socialIcon: { fontSize: "clamp(18px, 2.4vw, 22px)", color: "#fff" },

  container: {
    margin: "0 auto",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
  },

  heading: {
    fontSize: "clamp(28px, 3.6vw, 36px)",
    fontWeight: 800,
    margin: "0 0 24px",
    textAlign: "center",
  },

  timeline: { display: "grid", gap: "clamp(18px, 2.6vw, 28px)" },

  row: {
    display: "grid",
    gridTemplateColumns: "28px 1fr", // rail + card (desktop)
    gap: "16px",
    alignItems: "start",
  },

  // rail + dot
  railBox: { position: "relative", height: "100%" },
  rail: { position: "absolute", left: "12px", top: 0, bottom: 0, width: "3px", background: "#fff", opacity: 0.85 },
  dot: {
    position: "relative",
    left: "6px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: ACCENT,
    border: "2px solid #fff",
    boxShadow: "0 0 0 3px rgba(255,255,255,0.08)",
  },

  // card with NO translucent wash
  card: {
    background: "transparent",             // ← no gray overlay
    border: "none",                        // ← no faint border band
    borderLeft: `2px solid ${ACCENT}`,
    padding: "clamp(14px, 3vw, 18px)",
    borderRadius: "12px",
  },

  company: { fontSize: "clamp(18px, 2.4vw, 22px)", fontWeight: 800, margin: 0, color: "#fff" },
  role: { marginTop: 4, color: "#eaeaea", fontSize: "clamp(14px, 2vw, 17px)", fontWeight: 600 },
  date: { marginTop: 6, color: "#bdbdbd", fontSize: "clamp(12px, 1.8vw, 15px)" },
  ul: { marginTop: 10, paddingLeft: 20, lineHeight: 1.6, fontSize: "clamp(13px, 2vw, 16px)" },
  li: { marginBottom: 6 },
};

export default Experience;
