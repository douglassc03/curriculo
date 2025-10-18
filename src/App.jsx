// React resume project using Vite with the framer-motion package

import { motion } from "framer-motion";
import "./index.css";

const experiences = [
  {
    role: "Project Manager Intern",
    company: "Choice Technologies Holding SA",
    date: "Jul 2024 — Present",
    location: "Rio de Janeiro, Brazil · Hybrid",
    points: [
      "Manage and organize project tasks, schedules, and deadlines using Jira, Confluence, and Excel to ensure timely delivery and efficient workflow.",
      "Communicate directly in English with clients and colleagues from international offices, facilitating clear understanding and collaboration across borders.",
      "Assist in project documentation and progress tracking, helping maintain alignment between stakeholders and project teams.",
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
          <span className="brand">
            Douglas Scherer <span className="dot">•</span> Portfolio
          </span>
          <div className="nav-links">
            <a href="#exp">Experience</a>
            <a href="#volunteering">Volunteering</a>
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
              I’m Douglas Costa Beber Scherer — Product Management Intern & Computer Science Undergraduate at UFRRJ (Federal Rural University of Rio de Janeiro).
              Focused on Project Management, Scrum and Agile methodologies.
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
        <small>© {new Date().getFullYear()} Douglas Scherer — Built with React + Vite.</small>
      </footer>
    </div>
  );
}
