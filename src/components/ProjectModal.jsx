import { useEffect } from 'react';
import './ProjectModal.css';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="modal-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>

                {/* Modal Content */}
                <div className="modal-content-wrapper">
                    {/* Left Side - Video */}
                    <div className="modal-video-section">
                        {project.videoUrl ? (
                            <video
                                controls
                                autoPlay
                                loop
                                muted
                                className="project-video"
                            >
                                <source src={project.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="video-placeholder">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-video-fallback"
                                />
                            </div>
                        )}
                    </div>

                    {/* Right Side - Details */}
                    <div className="modal-details-section">
                        <h2 className="modal-project-title">{project.title}</h2>

                        <p className="modal-project-description">
                            {project.fullDescription || project.description}
                        </p>

                        {/* Technologies */}
                        <div className="modal-technologies">
                            <h3>Technologies:</h3>
                            <div className="tech-badges">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="tech-badge"
                                        style={{
                                            backgroundColor: `${tech.color}20`,
                                            color: tech.color,
                                            borderColor: tech.color
                                        }}
                                    >
                                        <tech.icon />
                                        <span>{tech.name}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="modal-actions">
                            {project.demo && project.demo !== '#' && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-btn demo-btn"
                                >
                                    <FaExternalLinkAlt /> VIEW DEMO
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-btn github-btn"
                                >
                                    <FaGithub /> GITHUB REPOSITORY
                                </a>
                            )}
                        </div>

                        {/* About Section */}
                        {project.about && (
                            <div className="modal-about">
                                <h3>About:</h3>
                                <p>{project.about}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
