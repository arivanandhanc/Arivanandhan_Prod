import React from "react";

const SkillsProjects = () => {
  return (
    <div className="section-container" style={styles.container}>
      <h2 style={styles.heading}>Skills & Projects</h2>

      {/* Projects Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Projects</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>JSM Ticket Dashboard:</strong> React app that queries the Atlassian Jira API (JQL), shows sortable tables, and exports to Excel (SheetJS).
          </li>
          <li style={styles.listItem}>
            <strong>Status & Health Tiles:</strong> Grid of major platform status pages (Atlassian, Vercel, AWS Health, Sitecore, New Relic) for quick incident triage.
          </li>
          <li style={styles.listItem}>
            <strong>New Relic Usage Dashboards:</strong> NRQL queries and account-level dashboards for ingestion/usage with account facets and month slices.
          </li>
          <li style={styles.listItem}>
            <strong>Jira API Utilities:</strong> Serverless (Netlify) functions for authenticated Jira search, organization filtering, pagination, and data normalization.
          </li>
        </ul>
      </div>

      {/* Projects Live Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Projects Live</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>JSM Ticket Dashboard (Live):</strong>{" "}
            <a
              href="https://fetchjmstickets.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff", textDecoration: "underline" }}
            >
              fetchjmstickets.netlify.app
            </a>{" "}
            — Live React app that connects to the Atlassian Jira API to fetch JSM issues using JQL/project/org filters, displays them in a clean table, and supports one-click Excel export (SheetJS). Backed by Netlify serverless functions for secure API calls.
          </li>
          <li style={styles.listItem}>
            <strong>Highlights:</strong> JQL/Organization filter, auto-generated table columns, Excel export, serverless endpoint using <code>/rest/api/3/search/jql</code>, optimized for quick triage and reporting.
          </li>
        </ul>
      </div>

      {/* Skills Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Skills & Expertise</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Atlassian (Jira & JSM):</strong> Project configuration, queues, request types, SLAs, workflows, permissions, service projects, organizations, and portals.
          </li>
          <li style={styles.listItem}>
            <strong>Jira REST API & JQL:</strong> Query/search, issue read/write, pagination, auth (Basic/API tokens), building dashboards and exports from API data.
          </li>
          <li style={styles.listItem}>
            <strong>Automation & Integrations:</strong> Jira automation rules, webhooks, Netlify serverless functions, Excel exports (SheetJS), and status/health views.
          </li>
          <li style={styles.listItem}>
            <strong>Confluence & Knowledge Management:</strong> Documentation, change logs, runbooks, test plans.
          </li>
          <li style={styles.listItem}>
            <strong>Monitoring & Observability:</strong> New Relic dashboards, uptime checks, performance troubleshooting (alerts, NRQL).
          </li>
          <li style={styles.listItem}>
            <strong>Frontend:</strong> React (hooks), responsive UI, form/data tables, CSV/XLSX export, fetch/async flows.
          </li>
          <li style={styles.listItem}>
            <strong>Testing & Quality:</strong> Postman for API validation, regression smoke flows, issue triage via Jira.
          </li>
        </ul>
      </div>

      {/* Education Section */}
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Education</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>B.Tech – Information Technology</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#000000",
    color: "#ffffff",
    textAlign: "left",
    maxWidth: "900px",
    margin: "auto",
    marginTop: "80px",
  },
  heading: {
    fontSize: "clamp(28px, 3.5vw, 36px)",
    fontWeight: "bold",
    marginBottom: "20px",
    borderBottom: "2px solid #ffffff",
    paddingBottom: "10px",
  },
  section: { marginBottom: "30px" },
  subHeading: {
    fontSize: "clamp(20px, 3vw, 24px)",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#ff6b6b",
  },
  list: { listStyleType: "none", padding: 0 },
  listItem: {
    fontSize: "clamp(14px, 2.2vw, 18px)",
    marginBottom: "10px",
    paddingLeft: "10px",
    borderLeft: "4px solid #ff6b6b",
  },
};

export default SkillsProjects;
