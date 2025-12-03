import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="/about" element={<AboutSection />} />
                        <Route path="/skills" element={<SkillsSection />} />
                        <Route path="/projects" element={<ProjectsSection />} />
                        <Route path="/contact" element={<ContactSection />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
