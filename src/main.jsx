import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Database,
  ChartNoAxesCombined,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  MapPin,
  Send,
  FileText,
  Download,
  ChevronRight,
  Terminal,
  Cpu,
  Globe2,
  MessageCircle,
} from "lucide-react";
import "./styles.css";

const LINKS = {
  kasuwa247: "https://kasuwa247.lovable.app/",
  pathwayPro: "https://pathway-pro-kano.lovable.app/",
  jambCbt: "https://jambcbtready.vercel.app/",
  github: "https://github.com/ibrahim644",
  whatsapp: "https://wa.me/2349014417010",
  instagram:
    "https://www.instagram.com/engr_ib_yaro?rpxt=ZXNidTc2bm85bmZm&utm_source=qr",
  email: "mailto:yaroibrahim2010@gmail.com",
  techportEmail: "mailto:techport2024@gmail.com",
  cv: "https://drive.google.com/file/d/1HTyICFl1ngdavesq45I48e-0-3GZWa1A/view?usp=sharing",
  linkedin:
    "https://www.linkedin.com/in/ibyaro-ng?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
};

const projects = [
  {
    number: "01",
    name: "Kasuwa247",
    type: "MARKET INTELLIGENCE · PRODUCT",
    description:
      "A market-price intelligence platform designed to help people compare everyday goods across Kano markets and make more informed buying decisions.",
    tags: ["Market intelligence", "React", "Supabase"],
    tone: "lime",
    image: "/images/kasuwa247-screenshot.png",
    status: "MVP BUILT",
    link: LINKS.kasuwa247,
  },
  {
    number: "02",
    name: "Pathway Pro",
    type: "AVIATION · TRAINING PLATFORM",
    description:
      "An aviation training and learning platform built to support aviation education and training.",
    tags: ["Aviation", "Web platform", "Training"],
    tone: "violet",
    image: "/images/pathway-pro-screenshot.png",
    status: "PROJECT",
    link: LINKS.pathwayPro,
  },
  {
    number: "03",
    name: "JAMB CBT",
    type: "EDTECH · EXAM PRACTICE",
    description:
      "A computer-based testing platform with subject selection, timed practice exams, question navigation, review tools, and results.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    tone: "blue",
    image: "/images/jamb-cbt-screenshot.png",
    status: "IN DEVELOPMENT",
    link: LINKS.jambCbt,
  },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend engineering",
    text: "React, Next.js, JavaScript, HTML, CSS, responsive interfaces",
  },
  {
    icon: Layers3,
    title: "Product & full-stack thinking",
    text: "Turning real-world problems into useful, maintainable digital products",
  },
  {
    icon: Database,
    title: "Data & backend",
    text: "PostgreSQL, Express.js, API design, Swagger UI, data workflows",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics",
    text: "Excel, Power BI, data analysis, insights and reporting",
  },
  {
    icon: Cpu,
    title: "Learning in public",
    text: "Exploring AI, emerging technology, and practical ways to build with them",
  },
  {
    icon: Globe2,
    title: "Community building",
    text: "Tech education, mentoring, collaboration, and digital skills access",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: LINKS.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: LINKS.linkedin,
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: LINKS.instagram,
    icon: Instagram,
  },
  {
    label: "Email",
    href: LINKS.email,
    icon: Mail,
  },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={label}
          title={label}
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a
            className="brand"
            href="#home"
            onClick={closeMenu}
            aria-label="Ibrahim Abdullahi home"
          >
            <img
              className="brand-logo"
              src="/images/ib-yaro-logo.png"
              alt="IB_yaro cat-paw signature"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#work" onClick={closeMenu}>
              Projects
            </a>
            <a href="#skills" onClick={closeMenu}>
              Capabilities
            </a>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
            <a href="#journey" onClick={closeMenu}>
              Journey
            </a>

            <div className="nav-socials" aria-label="Social media links">
              <SocialLinks />
            </div>

            <a
              className="nav-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> SOFTWARE ENGINEER · PRODUCT
              BUILDER
            </div>

            <h1>
              I build digital
              <br />
              things that <em>matter.</em>
            </h1>

            <p className="hero-lead">
              I'm Ibrahim Abdullahi — a software engineer and community
              builder focused on turning real problems into useful
              technology.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>

              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>

              <a
                className="button button-quiet"
                href={LINKS.cv}
                target="_blank"
                rel="noreferrer"
              >
                View CV <FileText size={16} />
              </a>

              <a
                className="button button-quiet"
                href={LINKS.cv}
                target="_blank"
                rel="noreferrer"
              >
                Download CV <Download size={16} />
              </a>
            </div>

            <div className="hero-footnote">
              <MapPin size={14} /> Based in Nigeria
              <span className="foot-separator">/</span> Building for people
              and businesses
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Developer workspace"
          >
            <div className="visual-topline">
              <span>WORKSPACE / 001</span>
              <span>AVAILABLE FOR SELECT PROJECTS</span>
            </div>

            <img
              className="hero-work-photo"
              src="/images/work-at-desk.jpeg"
              alt="Ibrahim working at his desk"
            />

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="visual-core">
              <div className="core-grid" />
              <div className="core-monogram">
                i<span>.</span>b
              </div>
              <div className="core-caption">
                IDEAS → INTERFACES → IMPACT
              </div>
            </div>

            <div className="float-card code-card">
              <div className="card-dots">
                <i />
                <i />
                <i />
              </div>
              <div className="code-line">
                <span>01</span> <b>const</b> purpose =
              </div>
              <div className="code-line indent">
                <strong>"solve real problems"</strong>;
              </div>
              <div className="code-line">
                <span>02</span> <b>build</b>(purpose);
              </div>
            </div>

            <div className="float-card mini-card">
              <span className="mini-icon">
                <Sparkles size={16} />
              </span>
              <div>
                <strong>Built with intention</strong>
                <small>Curiosity · Craft · Impact</small>
              </div>
            </div>

            <div className="visual-index">
              01 — 03 <span>PORTFOLIO / 2026</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner">
            <span className="strip-label">MY APPROACH</span>
            <p>
              Technology should do more than look impressive.{" "}
              <strong>It should make something better.</strong>
            </p>
            <span className="strip-star">✳</span>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>
              Curious by nature.
              <br />
              <em>Builder by choice.</em>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-large">
              I work at the intersection of software, data, and people—building
              practical tools and helping more people participate in the
              digital economy.
            </p>

            <div className="about-columns">
              <p>
                My journey spans software development, data analysis,
                technology education, and early-stage product building. I
                enjoy moving from a rough idea to a working product:
                understanding the problem, shaping the experience, and
                building toward a solution people can actually use.
              </p>
              <p>
                I'm especially interested in using technology to create
                opportunity in Northern Nigeria. Through projects and learning
                communities, I want to make digital skills more accessible
                and help local ideas grow into useful products.
              </p>
            </div>

            <a className="text-link" href="#journey">
              A little more about my journey <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="work-header">
              <div>
                <span className="section-index">02 / SELECTED WORK</span>
                <h2>
                  Ideas in <em>motion.</em>
                </h2>
              </div>
              <p>
                Explore selected products and platforms I've been building.
              </p>
            </div>

            <div className="project-grid project-grid-three">
              {projects.map((project) => (
                <article
                  className={`project-card ${project.tone}`}
                  key={project.number}
                >
                  <a
                    className="project-art project-screenshot-wrap project-art-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                  >
                    {project.image && (
                      <img
                        className="project-screenshot"
                        src={project.image}
                        alt={`${project.name} project screenshot`}
                      />
                    )}

                    <div className="project-art-top">
                      <span>{project.number} / 03</span>
                      <span className="project-status">{project.status}</span>
                    </div>

                    <div className="project-mark">{project.name}</div>
                    <div className="art-rings">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span className="art-corner">
                      <ExternalLink size={21} />
                    </span>
                  </a>

                  <div className="project-info">
                    <span className="project-type">{project.type}</span>
                    <h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name} <ExternalLink size={15} />
                      </a>
                    </h3>
                    <p>{project.description}</p>

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a
                      className="text-link project-visit-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit project <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="work-note">
              <Sparkles size={16} /> These projects reflect an ongoing
              practice of learning, building, testing, and improving.
            </div>
          </div>
        </section>

        <section className="section container skills-section" id="skills">
          <div className="section-heading">
            <span className="section-index">03 / CAPABILITIES</span>
            <h2>
              Tools are useful.
              <br />
              <em>Thinking is the edge.</em>
            </h2>
          </div>

          <div className="skills-layout">
            <p className="skills-intro">
              I bring technical execution and a problem-first mindset to each
              project. The stack changes; the goal stays the same: make it
              useful, reliable, and clear.
            </p>

            <div className="skills-grid">
              {skills.map(({ icon: Icon, title, text }, index) => (
                <div className="skill-item" key={title}>
                  <div className="skill-number">0{index + 1}</div>
                  <Icon size={21} strokeWidth={1.6} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="work-header gallery-header">
              <div>
                <span className="section-index">04 / PHOTO ROOM</span>
                <h2>
                  Life beyond
                  <br />
                  <em>the screen.</em>
                </h2>
              </div>
              <p>
                A space for portraits, work moments, learning, travel, and the
                experiences behind the work.
              </p>
            </div>

            <div className="gallery-grid">
              {[
                {
                  id: "01",
                  label: "At work",
                  hint: "Focused on the work, one problem at a time.",
                  file: "work-at-desk.jpeg",
                },
                {
                  id: "02",
                  label: "Hackathon team",
                  hint: "Building with the team under a shared deadline.",
                  file: "hackathon-team.jpeg",
                },
                {
                  id: "03",
                  label: "Teaching programming",
                  hint: "Helping learners turn ideas into working code.",
                  file: "teaching-programming.jpeg",
                },
                {
                  id: "04",
                  label: "Community tech programme",
                  hint: "Growing digital skills through community.",
                  file: "community-tech-programme.jpeg",
                },
                {
                  id: "05",
                  label: "Building with students",
                  hint: "Learning by building real projects together.",
                  file: "project-with-students.jpeg",
                },
              ].map((photo) => (
                <article
                  className={`gallery-slot gallery-photo-${photo.id}`}
                  key={photo.id}
                >
                  <div className="gallery-image-wrap">
                    <img
                      className="gallery-photo"
                      src={`/images/${photo.file}`}
                      alt={photo.label}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="gallery-placeholder">
                      <span className="gallery-slot-number">
                        {photo.id} / PHOTO
                      </span>
                      <div className="gallery-placeholder-icon">
                        <span>+</span>
                      </div>
                      <p>Place your image at</p>
                      <code>public/images/{photo.file}</code>
                    </div>
                  </div>

                  <div className="gallery-caption">
                    <span>{photo.id}</span>
                    <div>
                      <h3>{photo.label}</h3>
                      <p>{photo.hint}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="gallery-help">
              <Sparkles size={15} /> Add your photos by copying them into{" "}
              <code>public/images/</code> using the filenames shown in each
              tile.
            </p>
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="container journey-inner">
            <div className="journey-title">
              <span className="section-index">05 / THE JOURNEY</span>
              <h2>
                Still learning.
                <br />
                <em>Always building.</em>
              </h2>
              <p>
                Every role has taught me something about technology, teamwork,
                and the people behind the problem.
              </p>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-mark">NOW</span>
                <div>
                  <h3>Product building & TechPort</h3>
                  <p>
                    Building digital products and supporting practical
                    technology education through community-led learning.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-mark">TECH</span>
                <div>
                  <h3>Software development & facilitation</h3>
                  <p>
                    Developed software and supported learners as a facilitator
                    at Octave Digital Solutions.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-mark">DATA</span>
                <div>
                  <h3>Data analysis experience</h3>
                  <p>
                    Built analytical and operational experience, including a
                    data analyst internship at the Nigerian Ports Authority.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-mark">AVIATION</span>
                <div>
                  <h3>Aircraft maintenance training</h3>
                  <p>
                    Completed aircraft technician training with distinction.
                    Precision, systems thinking, and continuous learning
                    matter in every field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="contact-kicker">
              <span className="status-dot" /> HAVE A GOOD PROBLEM TO SOLVE?
            </div>

            <h2>
              Let's make
              <br />
              <em>something useful.</em>
            </h2>

            <p>
              Have a project, collaboration, or idea worth exploring? I'd like
              to hear about it.
            </p>

            <a
              className="button button-primary contact-button"
              href="mailto:yaroibrahim2010@gmail.com?subject=Lets%20build%20something"
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>

            <div className="contact-methods">
              <a
                className="contact-method"
                href="tel:+2349014417010"
              >
                <span className="contact-method-icon">
                  <Mail size={17} />
                </span>
                <span>
                  <small>CALL / PHONE</small>
                  <strong>0901 441 7010</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a
                className="contact-method"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-icon">
                  <MessageCircle size={17} />
                </span>
                <span>
                  <small>WHATSAPP</small>
                  <strong>+234 901 441 7010</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a
                className="contact-method email-method"
                href={LINKS.email}
              >
                <span className="contact-method-icon">
                  <Mail size={17} />
                </span>
                <span>
                  <small>PERSONAL EMAIL</small>
                  <strong>yaroibrahim2010@gmail.com</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a
                className="contact-method email-method"
                href={LINKS.techportEmail}
              >
                <span className="contact-method-icon">
                  <Mail size={17} />
                </span>
                <span>
                  <small>TECHPORT EMAIL</small>
                  <strong>techport2024@gmail.com</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a
                className="contact-method"
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-icon">
                  <Linkedin size={17} />
                </span>
                <span>
                  <small>LINKEDIN</small>
                  <strong>Connect professionally</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a
                className="contact-method"
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-icon">
                  <Instagram size={17} />
                </span>
                <span>
                  <small>INSTAGRAM</small>
                  <strong>@engr_ib_yaro</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a
                className="contact-method"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-icon">
                  <Github size={17} />
                </span>
                <span>
                  <small>GITHUB</small>
                  <strong>View my repositories</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a
                className="contact-method"
                href={LINKS.cv}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-icon">
                  <FileText size={17} />
                </span>
                <span>
                  <small>CURRICULUM VITAE</small>
                  <strong>View my CV on Google Drive</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="contact-bottom">
              <span>OPEN TO MEANINGFUL COLLABORATIONS</span>
              <span>BASED IN NIGERIA</span>
            </div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href={LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with IB_yaro on WhatsApp"
        title="Chat with me on WhatsApp"
      >
        <MessageCircle size={25} strokeWidth={2.2} />
        <span className="whatsapp-float-label">Chat on WhatsApp</span>
      </a>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <img
              className="brand-logo"
              src="/images/ib-yaro-logo.png"
              alt="IB_yaro cat-paw signature"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </a>

          <span className="footer-note">
            Made with curiosity in Nigeria.
          </span>

          <SocialLinks />

          <span className="copyright">
            © {new Date().getFullYear()} IBRAHIM ABDULLAHI
          </span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
