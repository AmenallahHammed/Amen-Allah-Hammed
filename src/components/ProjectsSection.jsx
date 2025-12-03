import { useState } from 'react';
import './ProjectsSection.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiNodedotjs, SiMongodb, SiPython, SiPytorch, SiScikitlearn, SiOpencv, SiAngular, SiSupabase, SiFigma } from 'react-icons/si';

const projectsData = [
    {
        id: 1,
        title: 'Resonance',
        description: 'Microservices platform connecting freelancers with companies through intelligent matching algorithms. Features a polyglot architecture with 6 independent services.',
        techStack: [
            { icon: SiAngular, color: '#dd0031' },
            { icon: SiNodedotjs, color: '#339933' },
            { icon: SiPython, color: '#3776ab' }
        ],
        github: 'https://github.com/AmenallahHammed',
        demo: '#',
        color: 'cyan',
        imageGradient: 'linear-gradient(135deg, #00f5ff 0%, #16213e 100%)'
    },
    {
        id: 2,
        title: 'Digit Recognition',
        description: 'Multi-model machine learning system with 6 algorithms and interactive web interface for real-time Arabic handwritten digit recognition.',
        techStack: [
            { icon: SiPython, color: '#3776ab' },
            { icon: SiPytorch, color: '#ee4c2c' },
            { icon: SiScikitlearn, color: '#f7931e' }
        ],
        github: 'https://github.com/AmenallahHammed',
        demo: '#',
        color: 'purple',
        imageGradient: 'linear-gradient(135deg, #b625ff 0%, #16213e 100%)'
    },
    {
        id: 3,
        title: 'Kahdemni',
        description: 'ATS-Friendly CV Creator web application helping job seekers improve their resume quality with real-time scoring and professional templates.',
        techStack: [
            { icon: SiAngular, color: '#dd0031' },
            { icon: SiSupabase, color: '#3ecf8e' },
            { icon: SiFigma, color: '#f24e1e' }
        ],
        github: 'https://github.com/AmenallahHammed',
        demo: '#',
        color: 'magenta',
        imageGradient: 'linear-gradient(135deg, #ff006e 0%, #16213e 100%)'
    }
];

function ProjectCard({ project }) {
    return (
        <div className="project-card-new">
            {/* Thumbnail Image Area */}
            <div className="project-thumbnail" style={{ background: project.imageGradient }}>
                <div className="thumbnail-overlay"></div>
                <div className="thumbnail-content">
                    <span className="view-project">View Project</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="project-content">
                <div className="project-header-row">
                    <h3 className="project-title-new">{project.title}</h3>
                    <div className="project-icons">
                        {project.techStack.map((tech, index) => (
                            <tech.icon key={index} style={{ color: tech.color }} />
                        ))}
                    </div>
                </div>

                <p className="project-description-new">
                    {project.description}
                </p>

                <div className="project-links">
                    <a href={project.demo} className="link-item live-demo">
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a href={project.github} className="link-item github-repo">
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="projects-layout">
                    <div className="projects-header-new">
                        <div className="header-icon-box">
                            <FaCode />
                        </div>
                        <h2>Featured Projects</h2>
                    </div>

                    <div className="projects-grid-new">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
