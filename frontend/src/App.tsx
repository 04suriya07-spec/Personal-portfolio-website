
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
    const fetchData = async () => {
      try {
        const [profileRes, skillsRes, projectsRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/skills'),
          fetch('/api/projects')
        ]);

        const profileData = await profileRes.json();
        const skillsData = await skillsRes.json();
        const projectsData = await projectsRes.json();

        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        // Fallback or error state handling
      }
    };

    fetchData();
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
