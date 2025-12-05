import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RotatingCube from './RotatingCube';
import RotatingTitles from './RotatingTitles';
import './HeroSection.css';
import cvFile from '../assets/Resume_Amen_Allah_Hammed.pdf';

export default function HeroSection() {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        // Initial glitch effect on load
        const glitchTimer = setTimeout(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 500);
        }, 500);

        return () => {
            clearTimeout(glitchTimer);
        };
    }, []);

    return (
        <section id="hero" className="section hero-section grid-bg scanlines">
            <div className="container">
                <div className="hero-content">
                    {/* Holographic UI Elements - System Stats */}
                    <div className="system-stats top-left">
                        <div className="stat-line">
                            <span className="stat-label">{'>'} SYSTEM STATUS:</span>
                            <span className="stat-value glow">ONLINE</span>
                        </div>
                        <div className="stat-line">
                            <span className="stat-label">{'>'} UPTIME:</span>
                            <span className="stat-value">99.9%</span>
                        </div>
                    </div>

                    <div className="system-stats top-right">
                        <div className="stat-line">
                            <span className="stat-label">LOCATION:</span>
                            <span className="stat-value">TUNIS, TN</span>
                        </div>
                        <div className="stat-line">
                            <span className="stat-label">STATUS:</span>
                            <span className="stat-value glow-purple">AVAILABLE</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="hero-main">
                        <div className="hero-text">
                            <div className="hero-greeting">
                                <span className="greeting-text">WELCOME TO MY PORTFOLIO</span>
                            </div>

                            <h1 className={`hero-name ${glitchActive ? 'glitch' : ''}`}>
                                <span className="text-gradient">HAMMED</span>
                                <br />
                                <span className="text-gradient">AMEN ALLAH</span>
                            </h1>

                            <RotatingTitles />

                            <p className="hero-description">
                                Building next-generation applications with cutting-edge technologies.
                                Specializing in microservices architecture, machine learning, and full-stack development.
                            </p>

                            <div className="hero-buttons">
                                <Link to="/projects" className="btn btn-primary">
                                    View Projects
                                </Link>
                                <a href={cvFile} download="Resume_Amen_Allah_Hammed.pdf" className="btn btn-outline">
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* 3D Cube */}
                        <div className="hero-cube">
                            <RotatingCube />
                        </div>
                    </div>


                </div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
}
