//projeto de curriculo em react usando vite com o pacote de framer-motion

// React resume project using Vite with the framer-motion package

import { motion } from "framer-motion";
import "./index.css";

const experiences = [
  {
    role: "Product Manager Intern",
    company: "Energy Company (US)",
    date: "2024 — present",
    points: [
      "Agile rituals, OKRs, backlog management",
      "Dashboards and prioritization (RICE)",
      "Collaboration with international teams",
    ],
  },
  {
    role: "Developer (academic projects)",
    company: "UFRRJ",
    date: "2022 — present",
    points: ["React + Vite", "Python/Whoosh – search engine", "AI / optimization (SA, GA, Tabu)"],
  },
];

const projects = [
  { title: "EcoTroca", tag: "Sustainable App", link: "#", img: "/ecotroca.jpg" },
  { title: "Whoosh Search Engine", tag: "IR / Python", link: "#", img: "/whoosh.jpg" },
  { title: "RTrainer", tag: "Gradient Descent", link: "#", img: "/rtrainer.jpg" },
];

export default function App() {
  return (
    <div>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="brand">
            ME<span className="dot">•</span>Portfolio
          </span>
          <div className="nav-links">
            <a href="#exp">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="headline"
        >
          Hello! <span className="gradient">Welcome!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, delay: 0.1 }}
          className="subhead"
        >
          I’m Douglas Costa Beber Scherer — Product Management Intern & Computer Science Undergraduate.  
          Focused on PMO and Data Analysis.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 0.2 }}
          className="cta-row"
        >
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn ghost" href="#contact">
            Contact
          </a>
        </motion.div>
        <div className="hero-img" />
      </header>

      {/* EXPERIENCE */}
      <section id="exp" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="list">
          {experiences.map((e) => (
            <motion.article
              key={e.role}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-head">
                <h3>
                  {e.role} • {e.company}
                </h3>
                <span className="muted">{e.date}</span>
              </div>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="tile"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="tile-img" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="tile-body">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <div className="contact">
          <p>
            Email: <a href="mailto:douglasscherer@ufrrj.br">douglasscherer@ufrrj.br</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/douglassc03/" target="_blank">
              linkedin.com/in/your-link
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/douglassc03" target="_blank">
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
