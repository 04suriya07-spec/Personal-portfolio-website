from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/profile")
def get_profile():
    return {
        "name": "Suriya R V",
        "role": "Full-Stack Developer & AI Specialist",
        "about": "I am a passionate software engineer dedicated to building high-performance web applications and exploring the frontiers of Artificial Intelligence. With a strong foundation in modern frameworks and a keen eye for design, I bridge the gap between complex backend logic and intuitive user experiences.",
        "location": "Chennai, India",
        "email": "04suriya07@gmail.com",
        "phone": "+91 98431 87793",
        "social": {
            "linkedin": "https://www.linkedin.com/in/suriya-r-v-59a998366/",
            "github": "https://github.com/04suriya07-spec"
        }
    }

@app.get("/api/skills")
def get_skills():
    return [
        {"name": "Frontend Mastery", "icon": "fab fa-react", "level": 90},
        {"name": "Backend Architecture", "icon": "fab fa-python", "level": 85},
        {"name": "Cloud & DevOps", "icon": "fas fa-cloud", "level": 75},
        {"name": "UI/UX Design", "icon": "fas fa-paint-brush", "level": 80}
    ]

@app.get("/api/projects")
def get_projects():
    return [
        {
            "title": "Coach-Pro Intelligence",
            "description": "A comprehensive educational management ecosystem featuring automated scheduling, student progress tracking, and AI-driven performance analytics.",
            "image": "/images/project_thumb.png",
            "link": "https://all-in-one-coaching-platform.vercel.app/",
            "tags": ["React", "PostgreSQL", "AI"]
        },
        {
            "title": "SquadConnect",
            "description": "A professional networking hub built for collaborative teams to streamline project communication and resource sharing in real-time.",
            "image": "/images/squadconnect.png",
            "link": "#",
            "tags": ["Node.js", "Socket.io", "Tailwind"]
        },
        {
            "title": "Kidz World Experience",
            "description": "An interactive, educational platform for children featuring gamified learning modules and a vibrant, responsive user interface.",
            "image": "/images/kidzworld.png",
            "link": "#",
            "tags": ["HTML5", "Canvas", "CSS3"]
        }
    ]
