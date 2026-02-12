import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";


import { motion } from "framer-motion";
import "./index.css";



/*const experiences = [

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
]; */

/* ====== VOLUNTEERING ====== */ /*
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
]; */

export default function App() {
  const { t, i18n } = useTranslation();
  const experiences = t("experiences", { returnObjects: true });
  const volunteering = t("volunteering", { returnObjects: true });
  
  return (
    <div>
      {/* NAV */}
  <nav className="nav">
  <div className="nav-inner">
    <span className="brand">{t("nav.brand")}</span>

    <div className="nav-links">
      <a href="#about">{t("nav.about")}</a>
      <a href="#certificates">{t("nav.certificates")}</a>
      <a href="#contact">{t("nav.contact")}</a>
    </div>

    {/* Language Switcher */}
    <div className="nav-lang">
      <button onClick={() => i18n.changeLanguage("pt")}>PT</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
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
        {t("hero.greeting")}{" "}
        <span className="gradient">{t("hero.welcome")}</span>
      </h1>

      <p className="subhead">
        {t("hero.description")}
      </p>

      <div className="cta-row">
        <a className="btn primary" href="#exp">
          {t("hero.viewExperience")}
        </a>
        <a className="btn ghost" href="#contact">
          {t("hero.contact")}
        </a>
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
  <h2 className="section-title">
    {t("sections.experience")}
  </h2>

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
          <h3>
            {e.role} • {e.company}
          </h3>
          <span className="muted">{e.date}</span>
        </div>

        {e.location && (
          <p className="muted" style={{ marginTop: 4 }}>
            {e.location}
          </p>
        )}

        <ul>
          {e.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </motion.article>
    ))}
  </div>
</section>



      {/* CERTIFICATES */}
<section id="certificates" className="section">
  <h2 className="section-title">
    {t("sections.certifications")}
  </h2>

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
          "Specialized coursework in: Web Programming (60 hours), Software Architecture (60 hours), Project Management (60 hours), Software Measurement and Quality (60 hours), Experimental Software Engineering (60 hours) and Entrepreneurship in Information Technology (60 hours)"
        ],
      },
      ...
    []].map((c) => (
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

        <p className="muted" style={{ marginTop: 4 }}>
          {c.org}
        </p>

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
        <h2 className="section-title">
          {t("sections.volunteering")}
        </h2>
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
  <h2 className="section-title">
    {t("about.title")}
  </h2>

  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="about-text"
  >
    <p>{t("about.p1")}</p>
    <p>{t("about.p2")}</p>
    <p>{t("about.p3")}</p>
    <p>{t("about.p4")}</p>
  </motion.div>
</section>



      {/* CONTACT */}
<section id="contact" className="section">
  <h2 className="section-title">
    {t("contact.title")}
  </h2>

  <div className="contact">
    <p>
      {t("contact.email")}:{" "}
      <a href="mailto:douglasscherer03@gmail.com">
        douglasscherer03@gmail.com
      </a>
    </p>

    <p>
      {t("contact.linkedin")}:{" "}
      <a
        href="https://www.linkedin.com/in/douglassc03/"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/douglassc03
      </a>
    </p>

    <p>
      {t("contact.github")}:{" "}
      <a
        href="https://github.com/douglassc03"
        target="_blank"
        rel="noreferrer"
      >
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