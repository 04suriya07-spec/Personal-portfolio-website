
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface Profile {
  name: string;
  role: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  social: {
    linkedin: string;
    github: string;
  };
}

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // In a real scenario, fetch from http://localhost:8000/api/...
    // For this demo, we'll hardcode initial state to match the static site 
    // to ensure it works immediately without running the python server, 
    // but the structure is ready for API integration.

    setProfile({
      name: "Suriya R V",
      role: "Full-Stack Developer & AI Specialist",
      about: "I am a passionate software engineer dedicated to building high-performance web applications and exploring the frontiers of Artificial Intelligence. With a strong foundation in modern frameworks and a keen eye for design, I bridge the gap between complex backend logic and intuitive user experiences.",
      location: "Chennai, India",
      email: "04suriya07@gmail.com",
      phone: "+91 98431 87793",
      social: {
        linkedin: "https://www.linkedin.com/in/suriya-r-v-59a998366/",
        github: "https://github.com/04suriya07-spec"
      }
    });

    setSkills([
      { name: "Frontend Mastery", icon: "fab fa-react", level: 90 },
      { name: "Backend Architecture", icon: "fab fa-python", level: 85 },
      { name: "Cloud & DevOps", icon: "fas fa-cloud", level: 75 },
      { name: "UI/UX Design", icon: "fas fa-paint-brush", level: 80 }
    ]);

    setProjects([
      {
        title: "Coach-Pro Intelligence",
        description: "A comprehensive educational management ecosystem featuring automated scheduling, student progress tracking, and AI-driven performance analytics.",
        image: "/images/project_thumb.png",
        link: "https://all-in-one-coaching-platform.vercel.app/",
        tags: ["React", "PostgreSQL", "AI"]
      },
      {
        title: "SquadConnect",
        description: "A professional networking hub built for collaborative teams to streamline project communication and resource sharing in real-time.",
        image: "/images/squadconnect.png",
        link: "#",
        tags: ["Node.js", "Socket.io", "Tailwind"]
      },
      {
        title: "Kidz World Experience",
        description: "An interactive, educational platform for children featuring gamified learning modules and a vibrant, responsive user interface.",
        image: "/images/kidzworld.png",
        link: "#",
        tags: ["HTML5", "Canvas", "CSS3"]
      }
    ]);
  }, []);

  if (!profile) return <div className="loading-screen">Preparing Excellence...</div>;

  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav-container">
          <a href="#home" className="logo">Suriya<span className="accent">.</span></a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-btn">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-subtitle">Engineering the Future</span>
              <h1 className="hero-title">{profile.name}</h1>
              <h2 className="hero-role-glitch">{profile.role}</h2>
              <p className="hero-description">{profile.about}</p>
              <div className="hero-btns">
                <a href="#projects" className="btn btn-primary">Explore My Work</a>
                <a href="/Resume-2025.pdf" target="_blank" className="btn btn-secondary" download>Curriculum Vitae</a>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="image-blob">
                <img src="/images/My-Image.jpeg" alt={profile.name} className="profile-img" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">Professional Journey</h2>
            <div className="about-grid">
              <div className="about-card">
                <h3>My Mission</h3>
                <p>To create technology that empowers individuals and organizations, focusing on scalability and user-centric design.</p>
              </div>
              <div className="about-card">
                <h3>Technical Philosophy</h3>
                <p>Clean code, efficient algorithms, and an obsession with detail are the cornerstones of my development process.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section bg-dim">
          <div className="container">
            <h2 className="section-title">Core Competencies</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name"><i className={skill.icon}></i> {skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Innovation Gallery</h2>
            <div className="projects-layout">
              {projects.map((project, index) => (
                <article key={index} className="project-glass-card">
                  <div className="project-preview">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <a href={project.link} target="_blank" className="view-button">Launch Case Study</a>
                    </div>
                  </div>
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-metatags">
                      {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Let's build something amazing together.</h3>
                <p>Available for freelance projects and full-time collaborations.</p>
                <ul className="contact-list">
                  <li><i className="fas fa-envelope"></i> {profile.email}</li>
                  <li><i className="fas fa-phone"></i> {profile.phone}</li>
                  <li><i className="fas fa-map-marker-alt"></i> {profile.location}</li>
                </ul>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Message Details" rows={5} required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="glass-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} {profile.name}. Crafted with Passion.</p>
          <div className="social-links">
            <a href={profile.social.github} target="_blank"><i className="fab fa-github"></i></a>
            <a href={profile.social.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
