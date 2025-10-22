import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const ACCENT = "#ff6b6b";

const SkillsProjects = () => {
  const [isSmall, setIsSmall] = useState(false);

  // 🔧 Live breakpoint detection
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsSmall(e.matches);
    handler(mq);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);

  const projects = [
    {
      title: "JSM Ticket Dashboard",
      desc: "React app that queries the Atlassian Jira API (JQL), shows sortable tables, and exports to Excel (SheetJS).",
    },
    {
      title: "Status & Health Tiles",
      desc: "Grid of major platform status pages (Atlassian, Vercel, AWS Health, Sitecore, New Relic) for quick incident triage.",
    },
    {
      title: "New Relic Usage Dashboards",
      desc: "NRQL queries and account-level dashboards for ingestion/usage with account facets and month slices.",
    },
    {
      title: "Jira API Utilities",
      desc: "Serverless (Netlify) functions for authenticated Jira search, organization filtering, pagination, and data normalization.",
    },
  ];

  const skills = [
    "Atlassian (Jira & JSM): Project configuration, queues, SLAs, workflows, permissions, service projects, and portals.",
    "Jira REST API & JQL: Query/search, issue read/write, pagination, building dashboards, and exports.",
    "Automation & Integrations: Jira automation rules, webhooks, Netlify functions, Excel exports (SheetJS).",
    "Confluence & Knowledge Management: Documentation, change logs, runbooks, test plans.",
    "Monitoring & Observability: New Relic dashboards, uptime checks, performance troubleshooting.",
    "Frontend: React (hooks), responsive UI, data tables, CSV/XLSX export, async data flows.",
    "Testing & Quality: Postman for API validation, regression smoke flows, issue triage via Jira.",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  // Reserve a gutter for the fixed social bar on desktop so it doesn't overlap timeline
  const SOCIAL_GUTTER = "56px"; // ~ icon size + gap; tweak if you change icon size

  return (
    <section
      style={{
        ...styles.wrap,
        // left/right edge padding matches header/footer
        padding: "clamp(18px, 3vw, 30px) clamp(16px, 4vw, 48px)",
        paddingTop: "calc(120px + clamp(18px, 3vw, 30px))",
        // add extra left padding on desktop to avoid collision with fixed socials
        paddingLeft: isSmall
          ? "clamp(16px, 4vw, 48px)"
          : `calc(clamp(16px, 4vw, 48px) + ${SOCIAL_GUTTER})`,
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

      <motion.div
        style={{
          ...styles.container,
          maxWidth: isSmall ? "100%" : "min(100%, 920px)",
          paddingLeft: isSmall ? "clamp(18px, 4vw, 30px)" : 0,
          paddingRight: isSmall ? "clamp(18px, 4vw, 30px)" : 0,
        }}
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2 style={styles.heading} variants={fadeIn}>
          Skills &amp; Projects
        </motion.h2>
        <motion.p style={styles.sub} variants={fadeIn}>
          A showcase of key projects and core expertise.
        </motion.p>

        {/* Projects */}
        <motion.div variants={fadeIn}>
          <h3 style={styles.sectionTitle}>Projects</h3>
          <div style={{ ...styles.timeline, gap: isSmall ? "14px" : styles.timeline.gap }}>
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                style={{
                  ...styles.row,
                  gridTemplateColumns: isSmall ? "1fr" : styles.row.gridTemplateColumns,
                  gap: isSmall ? "12px" : styles.row.gap,
                }}
                variants={fadeIn}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                {!isSmall && (
                  <div style={styles.railBox}>
                    <div style={styles.rail} />
                    <div style={styles.dot} />
                  </div>
                )}
                <article
                  style={{
                    ...styles.card,
                    borderLeft: isSmall ? `4px solid ${ACCENT}` : styles.card.borderLeft,
                    padding: isSmall ? "clamp(12px, 3.5vw, 16px)" : styles.card.padding,
                  }}
                >
                  <div style={styles.title}>{p.title}</div>
                  <p style={styles.meta}>{p.desc}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeIn} style={{ marginTop: "2rem" }}>
          <h3 style={styles.sectionTitle}>Skills &amp; Expertise</h3>
          <div style={{ ...styles.timeline, gap: isSmall ? "14px" : styles.timeline.gap }}>
            {skills.map((text, idx) => (
              <motion.div
                key={idx}
                style={{
                  ...styles.row,
                  gridTemplateColumns: isSmall ? "1fr" : styles.row.gridTemplateColumns,
                  gap: isSmall ? "12px" : styles.row.gap,
                }}
                variants={fadeIn}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                {!isSmall && (
                  <div style={styles.railBox}>
                    <div style={styles.rail} />
                    <div style={styles.dot} />
                  </div>
                )}
                <article
                  style={{
                    ...styles.card,
                    borderLeft: isSmall ? `4px solid ${ACCENT}` : styles.card.borderLeft,
                    padding: isSmall ? "clamp(12px, 3.5vw, 16px)" : styles.card.padding,
                  }}
                >
                  <p style={styles.meta}>{text}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
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
  wrap: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    position: "relative",
    boxSizing: "border-box",
  },

  // Desktop: fixed socials in the viewport center
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

  // Mobile: socials row on top
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

  container: {
    margin: "0 auto",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
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

  sectionTitle: {
    fontSize: "clamp(18px, 2.4vw, 22px)",
    fontWeight: 800,
    color: ACCENT,
    margin: "0 0 12px",
  },

  timeline: {
    display: "grid",
    gap: "clamp(18px, 2.6vw, 28px)",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "28px 1fr", // desktop: rail + card
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
    borderLeft: `2px solid ${ACCENT}`,
    padding: "clamp(12px, 2.6vw, 18px)",
    borderRadius: "10px",
  },
  title: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "clamp(18px, 2.4vw, 22px)",
  },
  meta: {
    marginTop: 6,
    color: "#e5e5e5",
    fontSize: "clamp(13px, 1.9vw, 16px)",
  },
};

export default SkillsProjects;
