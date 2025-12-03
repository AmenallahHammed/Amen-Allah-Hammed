import { useState, useEffect } from 'react';
import './ScrollNavigation.css';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

export default function ScrollNavigation() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize

        // Keyboard navigation
        const handleKeyDown = (e) => {
            const currentIndex = sections.findIndex(s => s.id === activeSection);

            if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
                e.preventDefault();
                scrollToSection(sections[currentIndex + 1].id);
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                e.preventDefault();
                scrollToSection(sections[currentIndex - 1].id);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeSection]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="scroll-navigation">
            <div className="nav-dots">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(section.id)}
                        aria-label={`Navigate to ${section.label}`}
                    >
                        <span className="dot-inner"></span>
                        <span className="dot-label">{section.label}</span>
                    </button>
                ))}
            </div>

            {/* Progress indicator */}
            <div className="scroll-progress">
                <div
                    className="progress-bar"
                    style={{
                        height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`
                    }}
                ></div>
            </div>
        </nav>
    );
}
