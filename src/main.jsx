import React, { useEffect, useState } from "react";

import { createRoot } from "react-dom/client";

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Layers3,
  GraduationCap,
  BriefcaseBusiness,
  ChevronUp,
} from "lucide-react";

import "./styles.css";

const projects = [
  {
    title: "E-Commerce Web Application",
    type: "Full Stack Project",
    description:
      "Full-stack e-commerce application with product browsing, user authentication, cart management, order processing, RESTful APIs, MySQL persistence and Razorpay online payment processing.",
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
      "Razorpay",
    ],
    github: "https://github.com/kalyanramnandhagiri/ECommerce",
    live: "#",
  },

  {
    title: "Doctor-Patient Portal",
    type: "Hospital Management Application",
    description:
      "Role-based hospital management application supporting doctor, patient, appointment and treatment modules with secure authentication, CRUD operations and database integration.",
    tech: [
      "JSP",
      "Servlets",
      "JDBC",
      "Oracle",
      "Bootstrap",
      "MVC",
    ],
    github: "https://github.com/kalyanramnandhagiri/AdvJavaProject",
    live: "#",
  },
];

const skills = [
  {
    name: "Java",
    level: "OOP • Collections • Java 8 • Streams",
    icon: Code2,
  },
  {
    name: "Spring Boot",
    level: "Backend • REST APIs",
    icon: Server,
  },
  {
    name: "React.js",
    level: "Frontend Development",
    icon: Layers3,
  },
  {
    name: "MySQL",
    level: "Database & Persistence",
    icon: Database,
  },
  {
    name: "Oracle",
    level: "Database Integration",
    icon: Database,
  },
  {
    name: "JSP / Servlets",
    level: "Java Web Development",
    icon: Code2,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo" onClick={closeMenu}>
          <span>K</span>alyan<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          {[
            "home",
            "about",
            "skills",
            "projects",
            "education",
            "contact",
          ].map((item) => (

            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>

          ))}

        </nav>

        <a className="nav-cta" href="#contact">
          Let's Talk
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>


      <main>

        {/* ================= HERO SECTION ================= */}

        <section id="home" className="hero section">

          <div className="hero-content">

            <p className="eyebrow">
              JAVA • SPRING BOOT • REACT
            </p>

            <h1>
              Hi, I'm <span>Kalyan Ram</span>
              <br />
              Java Full Stack Developer.
            </h1>

            <p className="hero-text">
              I develop end-to-end web applications using Java, Spring Boot,
              React.js, REST APIs, JDBC and SQL.
            </p>

            <div className="hero-actions">

              <a className="btn primary" href="#projects">
                View My Work
                <ArrowRight size={18} />
              </a>

              <a className="btn secondary" href="#contact">
                Contact Me
                <Mail size={18} />
              </a>

            </div>


            {/* ================= SOCIAL LINKS ================= */}

            <div className="socials">

              {/* GitHub */}

              <a
                href="https://github.com/kalyanramnandhagiri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/kalyan-ram-5344b52b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>


              {/* Email */}

              <a
                href="mailto:kalyanramnandhagiri11@gmail.com"
                aria-label="Email"
              >
                <Mail />
              </a>

            </div>

          </div>


          {/* ================= CODE CARD ================= */}

          <div className="hero-card">

            <div className="code-window">

              <div className="window-bar">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <pre>
{`const developer = {

  name: "Kalyan Ram",

  role: "Full Stack Developer",

  backend: ["Java", "Spring Boot"],

  frontend: ["React", "JavaScript"],

  database: ["MySQL", "Oracle"],

  passion: "Building great software"

};`}
              </pre>

            </div>

          </div>

        </section>


        {/* ================= ABOUT SECTION ================= */}

        <section id="about" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              Turning ideas into <span>working software.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-copy">

              <p>
                I'm a Java Full Stack Developer with hands-on experience
                developing web applications using Java, Spring Boot,
                React.js, REST APIs, JDBC, SQL, JSP and Servlets.
              </p>

              <p>
                I have built applications involving authentication, CRUD
                operations, database integration, RESTful services and
                online payment processing. I also have a strong foundation
                in OOP, Collections, Exception Handling, MVC architecture,
                DBMS and Java 8 features.
              </p>

              <a className="text-link" href="#contact">
                Let's work together
                <ArrowRight size={16} />
              </a>

            </div>


            <div className="stats">

              <div className="stat">
                <strong>2</strong>
                <span>Featured Projects</span>
              </div>

              <div className="stat">
                <strong>Java</strong>
                <span>Primary Stack</span>
              </div>

              <div className="stat">
                <strong>Java</strong>
                <span>Primary Language</span>
              </div>

              <div className="stat">
                <strong>2025</strong>
                <span>B.Tech Graduate</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS SECTION ================= */}

        <section id="skills" className="section alt">

          <div className="section-heading center">

            <p className="eyebrow">
              MY SKILLS
            </p>

            <h2>
              Technologies I <span>work with.</span>
            </h2>

          </div>


          <div className="skill-grid">

            {skills.map(({ name, level, icon: Icon }) => (

              <article
                className="skill-card"
                key={name}
              >

                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <div>
                  <h3>{name}</h3>
                  <p>{level}</p>
                </div>

              </article>

            ))}

          </div>


          <div className="tech-strip">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Git</span>
            <span>REST APIs</span>
            <span>Bootstrap</span>
            <span>Oracle</span>

          </div>

        </section>


        {/* ================= PROJECTS SECTION ================= */}

        <section id="projects" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              FEATURED WORK
            </p>

            <h2>
              Projects that show what I <span>can build.</span>
            </h2>

          </div>


          <div className="project-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <p className="project-type">
                  {project.type}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-desc">
                  {project.description}
                </p>


                <div className="tags">

                  {project.tech.map((t) => (
                    <span key={t}>
                      {t}
                    </span>
                  ))}

                </div>


                {/* PROJECT LINKS */}

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    GitHub
                    <Github size={16} />
                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= TRAINING SECTION ================= */}

        <section className="section">

          <div className="section-heading">

            <p className="eyebrow">
              TRAINING
            </p>

            <h2>
              Hands-on <span>development training.</span>
            </h2>

          </div>


          <div className="training-card">

            <div className="training-icon">
              <BriefcaseBusiness />
            </div>

            <div>

              <p className="training-label">
                Java Full Stack Development Training
              </p>

              <h3>
                Naresh IT, Ameerpet, Hyderabad
              </h3>

              <p>
                Hands-on training in Core Java, Advanced Java, Spring,
                Spring Boot, JDBC, SQL, JSP, Servlets, REST APIs and
                React.js, with practical work in MVC architecture,
                CRUD operations, RESTful services, Git, Maven, MySQL,
                OOP and Java 8.
              </p>

            </div>

          </div>

        </section>


        {/* ================= EDUCATION SECTION ================= */}

        <section id="education" className="section alt">

          <div className="section-heading center">

            <p className="eyebrow">
              EDUCATION
            </p>

            <h2>
              My <span>academic journey.</span>
            </h2>

          </div>


          <div className="timeline">

            <article className="timeline-item">

              <div className="timeline-icon">
                <GraduationCap />
              </div>

              <div className="timeline-content">

                <span>
                  Bachelor of Technology • Computer Science & Engineering
                </span>

                <h3>
                  Malla Reddy College of Engineering and Technology
                </h3>

                <p>
                  CGPA: 8.01 • 2025
                </p>

              </div>

            </article>


            <article className="timeline-item">

              <div className="timeline-icon">
                <GraduationCap />
              </div>

              <div className="timeline-content">

                <span>
                  Diploma • Civil Engineering
                </span>

                <h3>
                  Government Polytechnic Nalgonda
                </h3>

                <p>
                  CGPA: 9.61 • 2022
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* ================= CONTACT SECTION ================= */}

        <section id="contact" className="section contact-section">

          <div className="contact-card">

            <div>

              <p className="eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                Let's build something <span>great.</span>
              </h2>

              <p>
                I'm currently open to Java / Full Stack Developer
                opportunities. If you have a role, project or idea,
                I'd love to hear from you.
              </p>

            </div>


            <div className="contact-actions">

              {/* SEND EMAIL */}

              <a
                className="btn primary"
                href="mailto:kalyanramnandhagiri11@gmail.com"
              >
                <Mail size={18} />
                Send Email
              </a>


              {/* LINKEDIN */}

              <a
                className="btn secondary"
                href="https://www.linkedin.com/in/kalyan-ram-5344b52b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>


              {/* RESUME */}

              <a
                className="btn secondary"
                href="/Kalyan-Ram-Resume.pdf"
                download
              >
                <Download size={18} />
                Resume
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © {new Date().getFullYear()} Kalyan Ram.
          Built with React.js.
        </p>

        <a href="#home">
          Back to top
        </a>

      </footer>


      {/* ================= BACK TO TOP ================= */}

      {showTop && (

        <a
          className="top-btn"
          href="#home"
          aria-label="Back to top"
        >
          <ChevronUp />
        </a>

      )}

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);