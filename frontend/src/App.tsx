
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
      role: "Web Developer & AI Enthusiast",
      about: "Building seamless digital experiences with a passion for open-source and innovation.",
      location: "Chennai, India",
      email: "04suriya07@gmail.com",
      phone: "+91 98431 87793",
      social: {
        linkedin: "https://www.linkedin.com/in/suriya-r-v-59a998366/",
        github: "https://github.com/04suriya07-spec"
      }
    });

    setSkills([
      { name: "Python", icon: "fab fa-python", level: 70 },
      { name: "HTML & CSS", icon: "fab fa-html5", level: 90 },
      { name: "JavaScript", icon: "fab fa-js", level: 80 },
      { name: "Frameworks", icon: "fab fa-react", level: 85 }
    ]);

    setProjects([
      {
        title: "Coach-Pro",
        description: "An all-in-one coaching platform designed to streamline educational management.",
        image: "/images/project_thumb.png",
        link: "https://all-in-one-coaching-platform.vercel.app/",
        tags: ["Web Dev", "Platform"]
      }
    ]);
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav-container">
          <a href="#home" className="logo">Suriya<span className="accent">.</span></a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link btn-primary">Contact Me</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-subtitle">Hello, I'm</span>
              <h1 className="hero-title">{profile.name}</h1>
              <h2 className="hero-role">{profile.role}</h2>
              <p className="hero-description">{profile.about}</p>
              <div className="hero-btns">
                <a href="#projects" className="btn btn-filled">View My Work</a>
                <a href="/Resume-2025.pdf" target="_blank" className="btn btn-outline" download>Download Resume</a>
              </div>
            </div>
            <div className="hero-image">
              <div class="img-wrapper">
                <img src="/images/My-Image.jpeg" alt={profile.name} className="profile-img" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section bg-alt">
          <div className="container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon"><i className={skill.icon}></i></div>
                  <h3>{skill.name}</h3>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid single-project-centered">
              {projects.map((project, index) => (
                <article key={index} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                    <a href={project.link} target="_blank" className="project-link">View Project</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
