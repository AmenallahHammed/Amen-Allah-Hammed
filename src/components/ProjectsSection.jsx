import { useState } from 'react';
import './ProjectsSection.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiNodedotjs, SiMongodb, SiPython, SiPytorch, SiScikitlearn, SiOpencv, SiAngular, SiSupabase, SiFigma } from 'react-icons/si';
import ProjectModal from './ProjectModal';

// Import project images
import kahdemniImg from '../assets/kahdemni.png';
import resonanceImg from '../assets/resonance.png';
import digitRecognitionImg from '../assets/digit-recognition.png';

const projectsData = [
    {
        id: 1,
        title: 'Resonance',
        description: 'Microservices platform connecting freelancers with companies through intelligent matching algorithms.',
        fullDescription: 'Microservices platform connecting freelancers with companies through intelligent matching algorithms. Features a polyglot architecture with 6 independent services.',
        techStack: [
            { icon: SiAngular, name: 'Angular', color: '#dd0031' },
            { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
            { icon: SiPython, name: 'Python', color: '#3776ab' }
        ],
        github: 'https://github.com/AmenallahHammed',
        demo: '#',
        color: 'cyan',
        image: resonanceImg,
        videoUrl: null, // Add your video URL here
        about: 'Built with microservices architecture for scalability. Features include intelligent freelancer-company matching, real-time notifications, and comprehensive project management tools.'
    },
    {
        id: 2,
        title: 'Digit Recognition',
        description: 'Multi-model machine learning system with 6 algorithms and interactive web interface for real-time recognition.',
        fullDescription: 'Multi-model machine learning system with 6 algorithms and interactive web interface for real-time Arabic handwritten digit recognition.',
        techStack: [
            { icon: SiPython, name: 'Python', color: '#3776ab' },
            { icon: SiPytorch, name: 'PyTorch', color: '#ee4c2c' },
            { icon: SiScikitlearn, name: 'Scikit-learn', color: '#f7931e' }
        ],
        github: 'https://github.com/AmenallahHammed',
        demo: '#',
        color: 'purple',
        image: digitRecognitionImg,
        videoUrl: null, // Add your video URL here
        about: 'Built with multiple ML algorithms for accuracy. Features include CNN, SVM, Random Forest, and more for comprehensive digit recognition capabilities.'
    },
    {
        id: 3,
        title: 'Kahdemni',
        description: 'ATS-Friendly CV Creator helping job seekers improve their resume quality with real-time scoring.',
        fullDescription: 'ATS-Friendly CV Creator web application helping job seekers improve their resume quality with real-time scoring and professional templates.',
        techStack: [
            { icon: SiAngular, name: 'Angular', color: '#dd0031' },
            { icon: SiSupabase, name: 'Supabase', color: '#3ecf8e' },
            { icon: SiFigma, name: 'Figma', color: '#f24e1e' }
        ],
        github: 'https://github.com/AmenallahHammed',
        demo: '#',
        color: 'magenta',
        image: kahdemniImg,
        videoUrl: null, // Add your video URL here
        about: 'Built with Angular for cross-platform compatibility. Features include location-based job search, ATS scoring, hourly forecasts, and beautiful Lottie animations.'
    }
];

function ProjectCard({ project, onViewProject }) {
    return (
        <div className="project-card-new">
            {/* Thumbnail Image Area */}
            <div
                className="project-thumbnail"
                style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                onClick={onViewProject}
            >
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
                    <button onClick={onViewProject} className="link-item live-demo">
                        <FaExternalLinkAlt /> Live Demo
                    </button>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-item github-repo">
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection({ id = 'projects' }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewProject = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300); // Delay to allow animation
    };

    return (
        <section id={id} className="section projects-section">
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
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onViewProject={() => handleViewProject(project)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}
