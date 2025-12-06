import { FaJava, FaJs, FaPython, FaHtml5, FaCss3, FaDocker, FaGitAlt, FaGithub, FaDatabase, FaNodeJs, FaReact, FaLinux, FaServer, FaProjectDiagram, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiSpringboot, SiDotnet, SiFastapi, SiAngular, SiBootstrap, SiScikitlearn, SiPandas, SiPytorch, SiPostgresql, SiPostman, SiJira, SiMongodb, SiRedux, SiNextdotjs, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import './SkillsSection.css';

export default function SkillsSection({ id = 'skills' }) {
    return (
        <section id={id} className="section skills-section">
            <div className="container">
                <div className="skills-content">
                    {/* Header Text from Image */}
                    <div className="skills-header-text">
                        <h2>
                            I'm currently looking to join a <span className="highlight-purple">cross-functional team</span>
                            <br />
                            that values improving people's lives through accessible design
                        </h2>
                    </div>

                    {/* Orbit System */}
                    <div className="orbit-system">
                        {/* Central Core */}
                        <div className="central-core">
                            <div className="core-glow"></div>
                            <span className="core-text">H</span>
                        </div>

                        {/* Top Connected Icons (Tree Structure) */}
                        <div className="top-cluster">
                            {/* Lines (SVG) */}
                            <svg className="cluster-lines" viewBox="0 0 600 300">
                                <path d="M300 300 Q 300 150 100 50" className="connection-line" />
                                <path d="M300 300 Q 300 150 180 50" className="connection-line" />
                                <path d="M300 300 Q 300 150 260 50" className="connection-line" />
                                <path d="M300 300 Q 300 150 340 50" className="connection-line" />
                                <path d="M300 300 Q 300 150 420 50" className="connection-line" />
                                <path d="M300 300 Q 300 150 500 50" className="connection-line" />
                            </svg>

                            {/* Icons matching the lines */}
                            <div className="cluster-icons">
                                <div className="tech-orb" title="Figma"><FaFigma /></div>
                                <div className="tech-orb" title="React"><FaReact /></div>
                                <div className="tech-orb" title="C#"><SiDotnet /></div>
                                <div className="tech-orb" title="Node.js"><FaNodeJs /></div>
                                <div className="tech-orb" title="Redux"><SiRedux /></div>
                                <div className="tech-orb" title="JavaScript"><FaJs /></div>
                            </div>

                            {/* Second Row of Top Icons */}
                            <div className="cluster-icons-row-2">
                                <div className="tech-orb small" title="Angular"><SiAngular /></div>
                                <div className="tech-orb small" title="Next.js"><SiNextdotjs /></div>
                                <div className="tech-orb small" title="Spring"><SiSpringboot /></div>
                                <div className="tech-orb small" title="Illustrator"><SiAdobeillustrator /></div>
                                <div className="tech-orb small" title="Express"><FaServer /></div>
                                <div className="tech-orb small" title="MongoDB"><SiMongodb /></div>
                            </div>
                        </div>

                        {/* Orbital Rings */}
                        <div className="orbital-rings">
                            {/* Inner Ring */}
                            <div className="ring inner-ring">
                                <div className="orbit-icon" style={{ '--angle': '0deg' }}><FaJava /></div>
                                <div className="orbit-icon" style={{ '--angle': '120deg' }}><FaPython /></div>
                                <div className="orbit-icon" style={{ '--angle': '240deg' }}><SiTypescript /></div>
                            </div>

                            {/* Middle Ring */}
                            <div className="ring middle-ring">
                                <div className="orbit-icon" style={{ '--angle': '45deg' }}><FaDocker /></div>
                                <div className="orbit-icon" style={{ '--angle': '135deg' }}><FaGitAlt /></div>
                                <div className="orbit-icon" style={{ '--angle': '225deg' }}><FaLinux /></div>
                                <div className="orbit-icon" style={{ '--angle': '315deg' }}><SiPostgresql /></div>
                            </div>

                            {/* Outer Ring */}
                            <div className="ring outer-ring">
                                <div className="orbit-icon" style={{ '--angle': '30deg' }}><SiPytorch /></div>
                                <div className="orbit-icon" style={{ '--angle': '150deg' }}><SiScikitlearn /></div>
                                <div className="orbit-icon" style={{ '--angle': '270deg' }}><SiPostman /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
