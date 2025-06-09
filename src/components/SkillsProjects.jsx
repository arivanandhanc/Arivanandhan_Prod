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
      <strong>Manual Testing:</strong> Test case design, execution, exploratory testing, and regression validation.
    </li>
    <li style={styles.listItem}>
      <strong>Bug Tracking:</strong> Proficient in Jira for logging, tracking, and managing defects through the lifecycle.
    </li>
    <li style={styles.listItem}>
      <strong>Cross-Browser Testing:</strong> Hands-on experience with LambdaTest for real-time browser compatibility testing.
    </li>
    <li style={styles.listItem}>
      <strong>API Testing:</strong> Familiar with using Postman for sending requests, testing endpoints, and validating responses.
    </li>
    <li style={styles.listItem}>
      <strong>Test Documentation:</strong> Skilled in writing test cases, maintaining bug logs, and documenting test plans in Confluence.
    </li>
    <li style={styles.listItem}>
      <strong>Monitoring & Observability:</strong> Used New Relic for uptime monitoring and performance troubleshooting.
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
