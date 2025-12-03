import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaCode, FaLaptopCode, FaBrain } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "Full-Stack Developer",
        "Computer Science Student",
        "ML Enthusiast"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    const stats = [
        { icon: <FaCode />, count: "3+", label: "Years Experience" },
        { icon: <FaLaptopCode />, count: "10+", label: "Projects Completed" },
        { icon: <FaBrain />, count: "15+", label: "Technologies Mastered" },
    ];

    return (
        <div className="home">
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h2 className="greeting">Hello, I'm</h2>
                        <h1 className="name">Hammed Amen Allah</h1>
                        <h3 className="role">
                            I am a <span className="typing-text">{text}</span>
                            <span className="cursor">|</span>
                        </h3>
                        <p className="description">
                            Passionate about building scalable web applications and exploring the frontiers of Artificial Intelligence.
                            Turning complex problems into elegant solutions.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/projects" className="btn btn-primary">View Projects</Link>
                            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-placeholder">
                            {/* Placeholder for headshot - using a gradient/icon for now */}
                            <div className="avatar-circle">
                                <span className="initials">HA</span>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#stats" className="scroll-down">
                    <span className="scroll-text">Scroll Down</span>
                    <FaArrowDown className="scroll-icon" />
                </a>
            </section>

            <section id="stats" className="stats-section">
                <div className="container stats-container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-info">
                                <h3 className="stat-count">{stat.count}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
