import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaBehance, FaTwitter, FaGithub } from "react-icons/fa";

const Education = () => {
  return (
    <div style={styles.container}>
      {/* Left Sidebar - Social Links */}
      <div style={styles.sidebar}>
        <a href="https://www.linkedin.com/in/respectedarivu/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={styles.icon} />
        </a>
        <a href="https://www.facebook.com/Mr.C.Arivanandhan/" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={styles.icon} />
        </a>
        <a href="https://www.instagram.com/mr.coimbatorian/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={styles.icon} />
        </a>
        <a href="https://x.com/mr_arivanandhan" target="_blank" rel="noopener noreferrer">
    <FaTwitter style={styles.icon} />
  </a>
  <a href="https://github.com/respectedArivu" target="_blank" rel="noopener noreferrer">
    <FaGithub style={styles.icon} />
  </a>
        
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h2 style={styles.heading}>Education</h2>
        <p style={styles.description}>
          My academic journey and certifications that define my learning path.
        </p>

        {/* Timeline Section */}
        
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <span style={styles.year}>2024</span>
            <div style={styles.details}>
              <a
                href="https://www.annauniv.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.title}
              >
                Bachelor of Technology in Information Technology
              </a>
              <p>Rathinam Technical Campus | Anna University, Chennai</p>
              <p>CGPA: 7.9</p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <span style={styles.year}>2020</span>
            <div style={styles.details}>
              <a
                href="https://tnschools.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.title}
              >
                Higher Secondary (Mathematics & Biology)
              </a>
              <p>Pioneer Mills Higher Secondary School | TN State Board</p>
              <p>Percentage: 65.2%</p>
            </div>
          </div>
          
          {/* Added new education entries */}
          <div style={styles.timelineItem}>
            <span style={styles.year}>2018</span>
            <div style={styles.details}>
            <a
                href="https://www.someschool.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.title}
              >
                Secondary School Leaving Certificate (SSLC)
              </a>
              <p>ABC High School | State Board</p>
              <p>Percentage: 80%</p>
            </div>
          </div>

        </div>

        {/* Awards Section */}
        

        {/* Certifications Section */}
       
      </div>
    </div>
  );
};



// **Inline CSS Styles**
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box", // Ensures padding is part of height calculation
        flexDirection: "column",
        textAlign: "center",
        height: "auto",
        minHeight: "110vh", // Reduced from 170vh
      }
    
    ,
  sidebar: {
    position: "absolute",
    left: "5%",
    top: "50%",
    transform: "translateY(-30%)",
    display: "flex",
    flexDirection: "column",
    gap: "80px",
  },
  icon: {
    fontSize: "24px",
    color: "#ffffff",
    transition: "3s",
  },
  content: {
    maxWidth: "800px",
    paddingLeft: "25%", // Added padding to move content slightly from the left
    textAlign: "left", 
    maxHeight: "95vh", // Ensures maximum height does not exceed viewport
  },

  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    color: "#ccc",
    marginBottom: "30px",
  },
  timeline: {
    position: "relative",
    left: "-5%",
    borderLeft: "3px solid #ffffff",
    paddingLeft: "20px",
    marginBottom: "40px",
    height:"50%"
  }
  ,
  timelineItem: {
    marginBottom: "20px",
  },
  year: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ff6b6b",
  },
  details: {
    paddingLeft: "10px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#ffffff",
    transition: "0.3s",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "30px",
  },
  awards: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "30px",
  },
  awardItem: {
    fontSize: "18px",
    textDecoration: "none",
    color: "#ff6b6b",
    transition: "0.3s",
  },
  certList: {
    listStyleType: "none",
    padding: "0",
  },
};

// **Make It Responsive**
const mediaQuery = `
@media (max-width: 768px) {
  .container {
    padding: 40px 20px;
    align-items: center;
    height: auto;
  }
  .sidebar {
    position: static;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }
  .icon {
    font-size: 20px;
    margin: 0 10px;
  }
  .content {
    text-align: center;
    padding: 10px;
  }
  .timeline {
    border-left: none;
  }
  .timelineItem {
    text-align: left;
  }
  .awardItem {
    font-size: 16px;
  }
}`;

// Inject Media Query
const styleTag = document.createElement("style");
styleTag.innerHTML = mediaQuery;
document.head.appendChild(styleTag);

export default Education;
