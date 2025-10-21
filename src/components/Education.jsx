import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Education = () => {
  const items = [
    {
      year: "2024",
      title: "Bachelor of Technology in Information Technology",
      org: "Rathinam Technical Campus | Anna University, Chennai",
      extra: "CGPA: 7.9",
      link: "https://www.annauniv.edu/",
    },
    {
      year: "2020",
      title: "Higher Secondary (Mathematics & Biology)",
      org: "Pioneer Mills Higher Secondary School | TN State Board",
      extra: "Percentage: 65.2%",
      link: "https://tnschools.gov.in/",
    },
    {
      year: "2018",
      title: "Secondary School Leaving Certificate (SSLC)",
      org: "ABC High School | State Board",
      extra: "Percentage: 80%",
      link: "https://www.someschool.edu/",
    },
  ];

  return (
    <section style={styles.wrap}>
      {/* Social strip (collapses elegantly on small screens) */}
      <div style={styles.socials}>
        {[
          { Icon: FaLinkedin, href: "https://www.linkedin.com/in/respectedarivu/" },
          { Icon: FaFacebook, href: "https://www.facebook.com/Mr.C.Arivanandhan/" },
          { Icon: FaInstagram, href: "https://www.instagram.com/mr.coimbatorian/" },
          { Icon: FaTwitter, href: "https://x.com/mr_arivanandhan" },
          { Icon: FaGithub, href: "https://github.com/respectedArivu" },
        ].map(({ Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <Icon style={styles.socialIcon} />
          </a>
        ))}
      </div>

      {/* Content */}
      <div style={styles.container}>
        <h2 style={styles.heading}>Education</h2>
        <p style={styles.sub}>My academic journey and certifications that define my learning path.</p>

        <div style={styles.timeline}>
          {items.map((it, idx) => (
            <div key={idx} style={styles.row}>
              {/* rail + dot */}
              <div style={styles.railBox}>
                <div style={styles.rail} />
                <div style={styles.dot} />
              </div>

              {/* card */}
              <article style={styles.card}>
                <div style={styles.year}>{it.year}</div>
                <a href={it.link} target="_blank" rel="noopener noreferrer" style={styles.title}>
                  {it.title}
                </a>
                <p style={styles.meta}>{it.org}</p>
                <p style={styles.metaLight}>{it.extra}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ACCENT = "#ff6b6b";

const styles = {
  wrap: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "minmax(56px, 90px) 1fr", // social rail + content
    gap: "clamp(12px, 3vw, 24px)",
    alignItems: "start",
    padding: "clamp(16px, 4vw, 32px)",
  },

  socials: {
    position: "sticky",
    top: "96px",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(16px, 3vh, 28px)",
    alignItems: "center",
  },
  socialLink: { display: "inline-flex" },
  socialIcon: { fontSize: "clamp(18px, 2.4vw, 22px)", color: "#fff" },

  container: {
    maxWidth: "min(100%, 920px)",
    margin: "0 auto",
  },
  heading: {
    fontSize: "clamp(28px, 3.6vw, 36px)",
    fontWeight: 800,
    margin: "0 0 8px",
  },
  sub: {
    fontSize: "clamp(14px, 2.2vw, 17px)",
    color: "#cfcfcf",
    margin: "0 0 28px",
  },

  timeline: {
    display: "grid",
    gap: "clamp(18px, 2.6vw, 28px)",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "28px 1fr", // rail + card
    gap: "16px",
    alignItems: "start",
  },
  railBox: { position: "relative", height: "100%" },
  rail: {
    position: "absolute",
    left: "12px",
    top: 0,
    bottom: 0,
    width: "3px",
    background: "#fff",
    opacity: 0.85,
  },
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

  card: {
    background: "rgba(255,255,255,0.03)",
    borderLeft: `4px solid ${ACCENT}`,
    padding: "clamp(12px, 2.6vw, 18px)",
    borderRadius: "10px",
  },
  year: {
    color: ACCENT,
    fontWeight: 700,
    fontSize: "clamp(14px, 1.8vw, 16px)",
    marginBottom: 6,
  },
  title: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "clamp(18px, 2.4vw, 22px)",
  },
  meta: {
    marginTop: 6,
    color: "#e5e5e5",
    fontSize: "clamp(13px, 1.9vw, 16px)",
  },
  metaLight: {
    marginTop: 4,
    color: "#bdbdbd",
    fontSize: "clamp(12px, 1.8vw, 15px)",
  },
};

export default Education;
