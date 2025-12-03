import { useState, useEffect } from 'react';
import './RotatingTitles.css';

const titles = [
    'Full-Stack Developer',
    'Software Engineer',
    'Microservices Architect',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Code Craftsman',
    'Tech Innovator',
    'Backend Specialist',
    'Frontend Developer',
    'DevOps Engineer'
];

export default function RotatingTitles() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % titles.length);
                setIsAnimating(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rotating-titles-container">
            <span className="title-prefix">I'm a </span>
            <span className={`rotating-title ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                {titles[currentIndex]}
            </span>
            <span className="blinking-cursor">|</span>
        </div>
    );
}
