// React resume project using Vite with the framer-motion package

import { motion } from "framer-motion";
import "./index.css";

const experiences = [

  {
      role: "Junior Business Consultant",
      company: "Choice Technologies Holding - SEW",
      date: "Jan 2026 — Present",
      location: "Rio de Janeiro, Brazil · Hybrid",
      points: [
        "Engage in daily communication in English with global clients and internal stakeholders, fostering alignment and effective collaboration among teams.",
        "Develop and manage essential project documentation, including content related to Organizational Change Management (OCM), stakeholder analysis, training materials, and transformation efforts.",
        "Plan and coordinate activities, timelines, and project milestones using Jira, Confluence, Excel, and Microsoft Project, contributing to timely delivery and streamlined workflows.",
        "Assist in schedule maintenance and performance monitoring in accordance with PMO standards, promoting integration and communication between squads and stakeholders.",
      ],
    },

  {
    role: "Project Manager Intern",
    company: "Choice Technologies Holding - SEW",
    date: "Jul 2024 — Dez 2025",
    location: "Rio de Janeiro, Brazil · Hybrid",
    points: [
      "Manage and organize tasks, schedules, and project deadlines using Jira, Confluence, Excel, and Microsoft Project, ensuring on-time delivery and an efficient workflow.",
      "Communicate daily in English with international clients and internal stakeholders, supporting clear alignment and collaboration across teams",
      "Create and maintain key project documentation, including materials related to Organizational Change Management (OCM), stakeholder mapping, training, and transformation initiatives.",
      "Support schedule updates and progress tracking in alignment with PMO processes, ensuring communication between squads and stakeholders.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Studio VS | Exclusive Systems for Shopping Center Management",
    date: "Jun 2024 — Jul 2024",
    location: "Rio de Janeiro, Brazil · On-site",
    points: [
      "Developed web applications using PHP for internal company systems.",
      "Maintained and updated legacy systems built with Xbase (Clipper/dBase/FoxPro).",
      "Created and optimized SQL queries to handle large datasets efficiently.",
      "Fixed bugs and implemented enhancements in existing software systems.",
      "Collaborated with the development team to gather requirements and perform software testing.",
    ],
  },
];

/* ====== VOLUNTEERING ====== */
const volunteering = [
  {
    role: "Community Volunteer",
    org: "Ronald McDonald House Charities",
    date: "Jul 2019 — Sep 2019 · 3 months",
    area: "Civil rights and social action",
    points: [
      "Helped girls undergoing cancer treatment fulfill their dream of having a quinceañera celebration.",
      "Contributed to event logistics and community support activities.",
    ],
    // img: "/rmhc.jpg",
  },
];

export default function App() {
  return (
    <div>
      {/* NAV */}
  <nav className="nav">
  <div className="nav-inner">
    <span className="brand">Douglas Scherer Portifolio</span>
    <div className="nav-links">
      <a href="#about">About Me</a>
      <a href="#certificates">Certificates</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>



      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <h1 className="headline">
              Hello! <span className="gradient">Welcome!</span>
            </h1>
            <p className="subhead">
              I’m Douglas, a Junior Business Consultant and Computer Science graduate from UFRRJ, with advanced English communication and hands-on experience in project delivery, PMO, and Organizational Change Management (OCM). I support international teams by structuring timelines, developing clear documentation, and monitoring project progress using tools such as Jira, Confluence, and Microsoft Project.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#exp">View Experience</a>
              <a className="btn ghost" href="#contact">Contact</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-photo"
          >
            <img src="/douglas.jpg" alt="Douglas Scherer" />
          </motion.div>
        </div>
      </header>

      {/* EXPERIENCE */}
      <section id="exp" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="list">
          {experiences.map((e) => (
            <motion.article
              key={`${e.role}-${e.company}`}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-head">
                <h3>{e.role} • {e.company}</h3>
                <span className="muted">{e.date}</span>
              </div>
              {e.location && <p className="muted" style={{ marginTop: 4 }}>{e.location}</p>}
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
<section id="certificates" className="section">
  <h2 className="section-title">Certifications</h2>
  <div className="list">
    {[

      {
        title: "Systems and Information Engineering",
        org: "UFRRJ - Universidade Federal Rural do Rio de Janeiro",
        date: "2026",
        details: [
          "Completion of 360 hours of advanced studies in the field of Systems and Information Engineering.",
          "Focus on practical and theoretical skills for software development and technology management",
          "Certification issued and recognized by an academic institution",
          "Specialized coursework in: Web Programming (60 hours), Software Architecture (60 hours), Project Management (60 hours), Software Measurement and Quality (60 hours), Experimental Software Engineering (60 hours) and Entrepreneurship in Information Technology (60 hours)",
        ],
      },

      {
        title: "Change Management",
        org: "PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul",
        date: "2025",
        details: [
          "Value Proposition and VPD application",
          "Stakeholder engagement and behavior change analysis",
          "Readiness assessment and key performance tracking",
          "Key Users and Focal Points enablement",
          "Change communication and adoption deliverables",
        ],
      },
      {
        title: "Jira JQL",
        org: "Jira",
        date: "2024",
        details: [
          "Used JQL to filter and track issues across projects.",
          "Created custom queries to support reports and dashboards.",
          "Applied JQL to improve task prioritization and workflow efficiency",
          "Developed skills in managing schedules and meeting project deadlines.",
        ],
      },
      {
        title: "SAP Service Cloud",
        org: "SAP",
        date: "2024",
        details: [
          "Service ticket management and SLA monitoring",
          "Customer service data analysis and reporting",
          "Workflow optimization for support operations",
        ],
      },
    ].map((c) => (
      <motion.article
        key={`${c.title}-${c.org}`}
        className="card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="card-head">
          <h3>{c.title}</h3>
          <span className="muted">{c.date}</span>
        </div>

        <p className="muted" style={{ marginTop: 4 }}>{c.org}</p>

        {c.details?.length > 0 && (
          <ul>
            {c.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </motion.article>
    ))}
  </div>
</section>


      {/* VOLUNTEERING */}
      <section id="volunteering" className="section">
        <h2 className="section-title">Volunteering</h2>
        <div className="list">
          {volunteering.map((v) => (
            <motion.article
              key={`${v.role}-${v.org}`}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-head">
                <h3>{v.role} • {v.org}</h3>
                <span className="muted">{v.date}</span>
              </div>
              {v.area && <p className="muted" style={{ marginTop: 4 }}>{v.area}</p>}

              {/* Se quiser usar imagem do voluntariado, descomente abaixo e defina v.img */}
              {/* {v.img && (
                <div className="tile-img" style={{
                  height: 160, borderRadius: 12, marginTop: 10,
                  backgroundImage: `url(${v.img})`, backgroundSize: 'cover', backgroundPosition: 'center'
                }} />
              )} */}

              {v.points?.length > 0 && <ul>{v.points.map((p) => <li key={p}>{p}</li>)}</ul>}
            </motion.article>
          ))}
        </div>
      </section>

      {/* ABOUT ME */}
<section id="about" className="section">
  <h2 className="section-title">About Me</h2>

  <motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="about-text"
>
  <p>
    I'm a Junior Business Consultant and Computer Scientist based in Rio de Janeiro, with focus on project delivery, digital transformation, and client value generation. I have hands-on experience supporting strategic initiatives across Latin America, working closely with cross-functional and international teams to translate business needs into effective technology solutions.
  </p>

  <p>
    During my professional experience, I have contributed to SmartCX implementations for large-scale clients such as Copasa and Delsur, supporting the full delivery lifecycle — from requirements definition and planning to client workshops, architecture alignment, ticket triage, and executive-level status reporting. Working on-site with clients has strengthened my understanding of governance models, stakeholder management, and the importance of structured methodologies and best practices to ensure successful delivery.
  </p>

  <p>
    Over the past year and a half, I have developed solid expertise in acting as a communication bridge between clients and (Asia-Pacific) APAC delivery teams, ensuring alignment, transparency, and continuous progress toward shared objectives. I am particularly motivated by collaborative environments, problem-solving, and ensuring that digital solutions are not only delivered, but effectively adopted and capable of generating measurable business impact.
  </p>

  <p>
    Having recently completed my degree in Computer Science, I am prepared to continue evolving into Delivery or Product-oriented roles, contributing to innovative projects while building long-term, trust-based relationships with clients across the region.
  </p>
</motion.div>

</section>


      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="section-title">Get in touch!</h2>
        <div className="contact">
          <p>Email: <a href="mailto:douglasscherer03@gmail.com">douglasscherer03@gmail.com</a></p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/douglassc03/" target="_blank" rel="noreferrer">
              linkedin.com/in/douglassc03
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/douglassc03" target="_blank" rel="noreferrer">
              github.com/douglassc03
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <small>© {new Date().getFullYear()} Douglas Scherer</small>
      </footer>
    </div>
  );
}
