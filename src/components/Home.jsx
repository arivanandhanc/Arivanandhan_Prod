import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram, FaTwitter,
} from "react-icons/fa";
import bgVideo from "./bg.mp4"; // same folder
import Education from "./Education";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "100dvh",
          width: "100%",
          display: "grid",
          placeItems: "center",
          margin: 0,
          padding: 0,
          overflow: "auto",
          background: "#000",
        }}
      >
        {/* background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.35) saturate(1.15)",
            pointerEvents: "none",
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* centered content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textAlign: "center",
            maxWidth: "min(92vw, 920px)",
            padding: "clamp(16px, 3vw, 32px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(12px, 2.5vw, 22px)",
          }}
        >
          {/* socials */}
          <div style={{ display: "flex", gap: 16, marginBottom: 6 }}>
            {SOCIALS.map(({ Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }}>
                <Icon style={{ fontSize: "clamp(18px, 2.4vw, 22px)", color: "#fff" }} />
              </a>
            ))}
          </div>

          <h1
            style={{
              margin: 0,
              lineHeight: 1.12,
              letterSpacing: "0.5px",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 8vw, 5.5rem)",
              textWrap: "balance",
            }}
          >
            ARIVANANDHAN CHITHESHWARAN
          </h1>

          <div
            style={{
              fontStyle: "italic",
              color: "#ccc",
              fontSize: "clamp(13px, 1.8vw, 16px)",
              letterSpacing: "1.5px",
            }}
          >
            “Be the bridge between what you know and what the world needs”
          </div>

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
                target={b.href?.startsWith("#") ? undefined : "_blank"}
                rel={b.href?.startsWith("#") ? undefined : "noopener noreferrer"}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "clamp(9px, 1.8vw, 12px) clamp(16px, 2.6vw, 20px)",
                  border: "2px solid #fff",
                  borderRadius: 10,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  minHeight: 44,
                  transition: "background .25s ease, transform .2s ease, opacity .25s ease",
                  opacity: 0.95,
                  boxShadow: "0 6px 18px rgba(0,0,0,.18)",
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
            {/* Jump to Projects */}
            <a
              href="#projects"
              style={{
                color: "#000",
                background: "",
                color:'white',
                textDecoration: "none",
                padding: "clamp(9px, 1.8vw, 12px) clamp(16px, 2.6vw, 20px)",
                border: "2px solid #fff",
                borderRadius: 10,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                minHeight: 44,
                transition: "transform .2s ease, opacity .25s ease",
                opacity: 0.95,
                boxShadow: "0 6px 18px rgba(0,0,0,.18)",
              }}
              onClick={(e) => {
                // smooth scroll if supported
                const el = document.getElementById("projects");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              🚀 Projects
            </a>
          </div>

          <div
            style={{
              fontStyle: "italic",
              color: "#ccc",
              fontSize: "clamp(13px, 1.8vw, 16px)",
              letterSpacing: "1.5px",
            }}
          >
            “Learn deeply, act kindly, and teach freely — that’s how the world truly changes.”
          </div>

          <TypeAnimation
            sequence={[
              "Welcome to Arivu's site !",
              3000,
              "Ready to contribute to something good for the world ? Let’s connect. ",
              3000,
            ]}
            speed={80}
            deletionSpeed={100}
            style={{ whiteSpace: "pre-line", fontSize: "clamp(0.95rem, 2.4vw, 1.15rem)", opacity: 0.95 }}
            repeat={Infinity}
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          position: "relative",
          zIndex: 1,
          height:'100%',
          color: "#fff",
          padding: "clamp(32px, 5vw, 72px) 4vw",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <header style={{ marginBottom: "clamp(16px, 2vw, 28px)" }}>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(1.4rem, 4.2vw, 2.4rem)",
                lineHeight: 1.2,
                letterSpacing: "0.6px",
                fontWeight: 800,
              }}
            >
              Projects
            </h2>
            <p style={{ marginTop: 8, color: "#cfcfcf", maxWidth: 760 }}>
              A few things I’ve built recently. Click a card to open the live app.
            </p>
          </header>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "clamp(14px, 2.2vw, 22px)",
              alignItems: "stretch",
            }}
          >
            {PROJECTS.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: "18px 18px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 160,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.35)",
                  transition: "transform .18s ease, border-color .18s ease, box-shadow .18s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.45)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.35)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 style={{ margin: 0, fontSize: "clamp(1rem, 2.4vw, 1.25rem)", fontWeight: 700 }}>
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      letterSpacing: 0.6,
                      color: "#b9b9b9",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "4px 8px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.year}
                  </span>
                </div>

                <p style={{ margin: "4px 0 0", color: "#d9d9d9", lineHeight: 1.45 }}>
                  {p.desc}
                </p>

                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        color: "#cfcfcf",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        padding: "4px 8px",
                        borderRadius: 999,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* (Optional) EDUCATION or other sections can follow */}
      {/* <Education /> */}
    </>
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
  { href: "mailto:arivanandhan33@gmail.com", label: "Email", icon: <FaEnvelope size={20} color="#ffffff" />, hover: "#ff0000" },
  { href: "https://forms.gle/W2wP1qwjFfoVA8Be7", label: "✍️ Your Words!", icon: null, hover: "#007acc" },
];

const PROJECTS = [
  {
    title: "TvariTev",
    href: "https://tvaritev.netlify.app/",
    desc: "A fast, minimal app—built for snappy UX and clean delivery.",
    year: "2024",
    tags: ["React", "Netlify", "SPA"],
  },
  {
    title: "Live API Tester",
    href: "https://liveinapifortesting.vercel.app/",
    desc: "Browser-based API playground for quick requests and debugging.",
    year: "2025",
    tags: ["Next.js", "Vercel", "REST"],
  },
  {
    title: "Fetch JSM Tickets",
    href: "https://fetch-jsm-tickets.netlify.app/",
    desc: "Pulls Jira Service Management tickets with a streamlined UI.",
    year: "2025",
    tags: ["JSM", "React", "Netlify"],
  },
];

export default Home;
