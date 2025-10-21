import React from "react";

const Experience = () => {
  const jobs = [
    {
      company: "Horizontal Digital Pvt. Ltd.",
      title: "Service Desk Associate (Jira/JSM focus)",
      date: "Feb 2024 – Present",
      bullets: ["Successfully started my career here..! Yaahoo"],
    },
    {
      company: "React Developer Intern",
      title: "Frontend Intern (React)",
      date: "June 2023 – Oct 2023",
      bullets: [
        "Developed and deployed the company website using React.js, ensuring a responsive and user-friendly interface.",
      ],
    },
  ];

  return (
    <section style={styles.wrap}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Work Experience</h2>

        <div style={styles.list}>
          {jobs.map((j, idx) => (
            <article key={idx} style={styles.item}>
              <div style={styles.leftBar} />
              <div style={styles.body}>
                <h3 style={styles.company}>{j.company}</h3>
                <div style={styles.role}>{j.title}</div>
                <div style={styles.date}>{j.date}</div>
                <ul style={styles.ul}>
                  {j.bullets.map((b, i) => (
                    <li key={i} style={styles.li}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
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
    padding: "clamp(16px, 4vw, 32px)",
    display: "flex",
  },
  container: {
    maxWidth: "min(100%, 920px)",
    margin: "0 auto",
    width: "100%",
    textAlign: "left",
  },
  heading: {
    fontSize: "clamp(28px, 3.6vw, 36px)",
    fontWeight: 800,
    textAlign: "center",
    margin: "0 0 24px",
  },

  list: {
    display: "grid",
    gap: "clamp(18px, 2.6vw, 28px)",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "6px 1fr", // accent bar + content
    gap: "16px",
    alignItems: "stretch",
  },
  leftBar: {
    background: ACCENT,
    borderRadius: "10px",
  },
  body: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "clamp(14px, 3vw, 18px)",
  },
  company: {
    fontSize: "clamp(18px, 2.4vw, 22px)",
    fontWeight: 800,
    margin: 0,
  },
  role: {
    marginTop: 4,
    color: "#eaeaea",
    fontSize: "clamp(14px, 2vw, 17px)",
    fontWeight: 600,
  },
  date: {
    marginTop: 6,
    color: "#bdbdbd",
    fontSize: "clamp(12px, 1.8vw, 15px)",
  },
  ul: {
    marginTop: 10,
    paddingLeft: "20px",
    lineHeight: 1.6,
    fontSize: "clamp(13px, 2vw, 16px)",
  },
  li: { marginBottom: 6 },
};

export default Experience;
