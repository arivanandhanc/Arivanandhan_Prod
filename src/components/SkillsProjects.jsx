import React from "react";
import { FaAlignCenter } from "react-icons/fa";

const SkillsProjects = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Skills & Projects</h2>

      {/* Skills Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Skills & Expertise</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Jira Service Desk & ITSM:</strong> 
            Expertise in configuring workflows, issue types, automation, REST API integrations, and managing SLAs.
          </li>
          <li style={styles.listItem}>
            <strong>New Relic Monitoring:</strong> 
            Hands-on experience with APM, Synthetics, and dashboards to proactively detect and resolve performance issues.
          </li>
          <li style={styles.listItem}>
            <strong>ReactJS Development:</strong> 
            Proficient in building modern, responsive web applications with React, optimizing UI/UX for performance and accessibility.
          </li>
          <li style={styles.listItem}>
            <strong>Documentation & Confluence:</strong> 
            Skilled in maintaining SOPs, technical documentation, and Confluence pages for streamlined knowledge management.
          </li>
          <li style={styles.listItem}>
            <strong>Client Communication & Service Desk Operations:</strong> 
            Experienced in handling end-user queries, service desk operations, and ensuring seamless IT support.
          </li>
        </ul>
      </div>

      {/* Projects Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Projects</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Simple Ping Monitor:</strong> 
            Developed a web app to monitor website uptime and trigger email alerts when a site goes down.
          </li>
          <li style={styles.listItem}>
            <strong>Time Zone Calculator:</strong> 
            Built a real-time time zone conversion tool to assist remote teams in scheduling meetings efficiently.
          </li>
          <li style={styles.listItem}>
            <strong>WhatsApp Integration:</strong> 
            Implemented WhatsApp messaging API to automate notifications and enhance customer engagement.
          </li>
        </ul>
      </div>
    </div>
  );
};

// **Inline CSS Styles**
const styles = {
    container: {
        padding: "2rem",
        backgroundColor: "#000000",
        color: "#ffffff",
        textAlign: "left",
        maxWidth: "900px",
        margin: "auto",
        marginTop: "80px", // Adjust this value based on your header height
      },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    borderBottom: "2px solid #ffffff",
    paddingBottom: "10px",
  },
  section: {
    marginBottom: "30px",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#ff6b6b",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    fontSize: "18px",
    marginBottom: "10px",
    paddingLeft: "10px",
    borderLeft: "4px solid #ff6b6b",
  },
};

export default SkillsProjects;
