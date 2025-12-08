// React resume project using Vite with the framer-motion package

import { motion } from "framer-motion";
import "./index.css";

const experiences = [
  {
    role: "Project Manager Intern",
    company: "Choice Technologies Holding - SEW",
    date: "Jul 2024 — Present",
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

/* ====== VOLUNTEERING ====== 
   Edite livremente os textos/links abaixo. 
   Se quiser imagem, coloque em /public e use o campo img. */
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
    <span className="brand">Douglas Scherer</span>
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
              I'm Douglas, Bachelor’s Degree candidate in Computer Science at UFRRJ, with strong communication in English and hands-on experience in PMO and Organizational Change Management (OCM). I provide support to international teams in timeline structuring, documentation development, and rigorous project progress monitoring, using tools such as Jira, Confluence, and Microsoft Project.
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
    I am a Project Management Intern and newly-graduated Computer Scientist based in Rio de Janeiro,
    passionate about delivery excellence and transforming customer needs into real value. Throughout
    my internship, I have worked on strategic digital transformation projects across Latin America,
    collaborating closely with cross-functional and international teams.
  </p>

  <p>
    I have contributed to SmartCX implementations for major clients such as Copasa and Delsur —
    supporting activities from requirements definition and planning to workshops, architecture
    alignment, ticket triage, and weekly status reporting. Being on-site with the client has given
    me a strong understanding of governance, stakeholder communication, and how to drive delivery
    through structured methods and best practices.
  </p>

  <p>
    Over the last year and a half, I have developed solid experience in bridging communication
    between clients and APAC teams, ensuring clarity, alignment, and progress toward shared goals.
    I enjoy connecting with people, solving problems, and ensuring that technology solutions are
    successfully adopted and generate measurable impact.
  </p>

  <p>
    Now that I have completed my Computer Science degree, I am fully prepared for the next step:
    growing into Delivery or Product roles, while continuing to contribute to innovative solutions
    and strengthening relationships with our clients in the region.
  </p>
</motion.div>

</section>


      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <div className="contact">
          <p>Email: <a href="mailto:douglasscherer@ufrrj.br">douglasscherer@ufrrj.br</a></p>
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
