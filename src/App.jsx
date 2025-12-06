import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
    return (
        <div className="app">
            <Navbar />

            <main className="main-content">
                {/* Floating Geometric Shapes - Global Background */}
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>

                <HeroSection id="home" />
                <AboutSection id="about" />
                <SkillsSection id="skills" />
                <ProjectsSection id="projects" />
                <ContactSection id="contact" />
            </main>
        </div>
    );
}

export default App;
