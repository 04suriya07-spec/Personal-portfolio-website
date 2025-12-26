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

class Project(BaseModel):
    title: str
    description: str
    image: str
    link: str
    tags: List[str]

class Skill(BaseModel):
    name: str
    icon: str
    level: int 

@app.get("/")
def read_root():
    return {"message": "Welcome to Suriya's Portfolio API"}

@app.get("/api/profile")
def get_profile():
    return {
        "name": "Suriya R V",
        "role": "Web Developer & AI Enthusiast",
        "about": "Building seamless digital experiences with a passion for open-source and innovation.",
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
        {"name": "Python", "icon": "fab fa-python", "level": 70},
        {"name": "HTML & CSS", "icon": "fab fa-html5", "level": 90},
        {"name": "JavaScript", "icon": "fab fa-js", "level": 80},
        {"name": "Frameworks", "icon": "fab fa-react", "level": 85}
    ]

@app.get("/api/projects")
def get_projects():
    return [
        {
            "title": "Coach-Pro",
            "description": "An all-in-one coaching platform designed to streamline educational management.",
            "image": "/images/project_thumb.png",
            "link": "https://all-in-one-coaching-platform.vercel.app/",
            "tags": ["Web Dev", "Platform"]
        }
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
