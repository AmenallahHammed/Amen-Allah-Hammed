import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Resonance - Job Matching Platform",
            status: "Work in Progress",
            description: "A microservices platform connecting freelancers with companies. Features 6 independent services including Auth, Jobs, Contract, Billing, and AI Matching.",
            techStack: ["Spring Boot", "Node.js", ".NET Core", "Python/FastAPI", "Angular", "PostgreSQL", "Docker"],
            features: [
                "Polyglot architecture",
                "JWT authentication",
                "AI Matching with Python",
                "Docker containerization"
            ],
            githubLink: "https://github.com/AmenallahHammed", // Placeholder as requested
            image: "https://placehold.co/600x400/1e293b/0ea5e9?text=Resonance" // Placeholder image
        },
        {
            title: "Arabic Handwritten Digit Recognition",
            status: "Completed",
            description: "Multi-model ML system with 6 algorithms for digit recognition. Includes an interactive web app with drawing canvas for real-time predictions.",
            techStack: ["Python", "PyTorch", "Scikit-learn", "OpenCV", "Gradio"],
            features: [
                "KNN, SVM, CNN models",
                "Real-time drawing canvas",
                "Adaptive preprocessing",
                "Gradio Interface"
            ],
            githubLink: "https://github.com/AmenallahHammed",
            image: "https://placehold.co/600x400/1e293b/14b8a6?text=Digit+Recognition"
        },
        {
            title: "Kahdemni - ATS-Friendly CV Creator",
            status: "Completed",
            description: "Web application for creating ATS-friendly CVs with grading functionality. Built with a focus on collaborative UI/UX design.",
            techStack: ["Angular", "Supabase", "TypeScript", "Figma"],
            features: [
                "ATS-friendly templates",
                "Real-time grading",
                "Supabase Backend",
                "Collaborative Design"
            ],
            githubLink: "https://github.com/AmenallahHammed",
            image: "https://placehold.co/600x400/1e293b/f43f5e?text=Kahdemni"
        }
    ];

    return (
        <div className="projects-page">
            <section className="section">
                <div className="container">
                    <h1 className="section-title">Featured <span className="text-gradient">Projects</span></h1>
                    <p className="section-desc">A selection of my recent work in Software Development and AI.</p>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> View Code
                                        </a>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <div className="project-header">
                                        <h3>{project.title}</h3>
                                        {project.status === "Work in Progress" && <span className="status-badge">WIP</span>}
                                    </div>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-features">
                                        <h4>Key Features:</h4>
                                        <ul>
                                            {project.features.map((feature, idx) => (
                                                <li key={idx}>• {feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="tech-stack">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
