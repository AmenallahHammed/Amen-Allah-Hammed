import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaCode, FaServer, FaDatabase, FaTools, FaLanguage, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-skill');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const skillBars = document.querySelectorAll('.skill-progress-fill');
        skillBars.forEach((bar) => observer.observe(bar));

        return () => observer.disconnect();
    }, []);

    const education = [
        {
            school: "University of Monastir",
            degree: "BS in Computer Science",
            year: "2023 – 2026",
            description: "Focusing on software engineering, algorithms, and data structures."
        },
        {
            school: "Slimen Ben Slimen High School",
            degree: "Baccalaureate with Honors",
            year: "2019 – 2023",
            description: "Mathematics specialization."
        }
    ];

    const skillCategories = [
        {
            title: "Languages",
            icon: <FaCode />,
            skills: [
                { name: "Java", level: 90 },
                { name: "JavaScript/TypeScript", level: 85 },
                { name: "Python", level: 80 },
                { name: "C#", level: 75 },
                { name: "SQL", level: 85 }
            ]
        },
        {
            title: "Frontend",
            icon: <FaLaptopCode />, // Assuming FaLaptopCode is imported or use FaCode
            skills: [
                { name: "Angular", level: 85 },
                { name: "React", level: 80 },
                { name: "HTML5/CSS3", level: 95 },
                { name: "Bootstrap/Tailwind", level: 90 }
            ]
        },
        {
            title: "Backend",
            icon: <FaServer />,
            skills: [
                { name: "Spring Boot", level: 85 },
                { name: "Node.js/Express", level: 80 },
                { name: ".NET Core", level: 75 },
                { name: "FastAPI", level: 70 }
            ]
        },
        {
            title: "ML/AI",
            icon: <FaBrain />, // Assuming FaBrain is imported
            skills: [
                { name: "Scikit-Learn", level: 75 },
                { name: "Pandas", level: 80 },
                { name: "PyTorch", level: 65 },
                { name: "KNN/SVM", level: 70 }
            ]
        }
    ];

    return (
        <div className="about-page">
            <section className="section about-hero">
                <div className="container">
                    <h1 className="section-title">About <span className="text-gradient">Me</span></h1>
                    <div className="bio-content">
                        <p>
                            I am a dedicated Computer Science student and Full-Stack Developer based in Zaghouan, Tunis.
                            With a passion for building scalable web applications and exploring the potential of Artificial Intelligence,
                            I strive to create efficient and user-centric solutions.
                        </p>
                        <div className="badges">
                            <span className="badge"><FaLanguage /> Arabic (Native)</span>
                            <span className="badge"><FaLanguage /> English (Advanced)</span>
                            <span className="badge"><FaLanguage /> French (Intermediate)</span>
                            <span className="badge"><FaUsers /> Agile/Scrum</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section timeline-section">
                <div className="container">
                    <h2 className="section-subtitle"><FaGraduationCap /> Education</h2>
                    <div className="timeline">
                        {education.map((edu, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>{edu.school}</h3>
                                    <h4>{edu.degree}</h4>
                                    <span className="timeline-date">{edu.year}</span>
                                    <p>{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section skills-section" ref={skillsRef}>
                <div className="container">
                    <h2 className="section-subtitle"><FaTools /> Technical Skills</h2>
                    <div className="skills-grid">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="skill-category">
                                <h3>{category.icon} {category.title}</h3>
                                <div className="skill-list">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx} className="skill-item">
                                            <div className="skill-info">
                                                <span>{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="skill-progress-bar">
                                                <div
                                                    className="skill-progress-fill"
                                                    style={{ '--target-width': `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper components for icons if not imported above
const FaLaptopCode = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>;
const FaBrain = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" strokeMiterlimit="10" strokeWidth="32"></path><path d="M250.26 166.05L256 288l5.74-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.69 6z"></path><path d="M256 367.91a5.76 5.76 0 00-5.76-5.75h0a5.76 5.76 0 00-5.75 5.75L256 480l11.51-112.09a5.76 5.76 0 00-5.75-5.75h0a5.76 5.76 0 00-5.76 5.75z"></path></svg>;

export default About;
