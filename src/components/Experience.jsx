import React from "react";

const Experience = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Work Experience</h2>
      
      <div style={styles.jobContainer}>
        <h3 style={styles.jobTitle}> Horizontal Digital Pvt. Ltd.</h3>
        <p style={styles.date}>Feb 2024 - Present</p>
        <ul style={styles.list}>
          <li>Successfully started my career here..!Yaahoo</li>  
        </ul>
      </div>
      
      <div style={styles.jobContainer}>
        <h3 style={styles.jobTitle}>React Developer Intern </h3>
        <p style={styles.date}>June 2023 - Oct 2023</p>
        <ul style={styles.list}>
          <li>Developed and deployed the company<br/> 
          website using React.js,ensuring a responsive <br/>
          and user-friendly interface.</li>

        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    textAlign: "left",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  jobContainer: {
    marginBottom: "2rem",
    maxWidth: "800px",
    padding: "1rem",
    borderLeft: "4px solid #ff6b6b",
  },
  jobTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  date: {
    fontSize: "18px",
    color: "#ccc",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.6",
  },
};

export default Experience;
