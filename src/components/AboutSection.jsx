import profileImg from '../assets/profile.jpg';
import './AboutSection.css';

export default function AboutSection({ id = 'about' }) {
    return (
        <section id={id} className="section about-section">
            {/* Decorative Background Circles */}
            <div className="deco-circle top-left"></div>
            <div className="deco-circle bottom-right"></div>
            <div className="deco-circle small-top"></div>

            <div className="container">
                <div className="about-layout">
                    {/* Left Column: Profile Image */}
                    <div className="about-image-container">
                        <div className="profile-circle-wrapper">
                            <div className="profile-circle">
                                <img src={profileImg} alt="Profile" className="profile-image" />
                            </div>
                            {/* Glowing ring effect */}
                            <div className="profile-ring"></div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="about-text-container">
                        <div className="hello-header">
                            <h1 className="hello-text">Hello!</h1>
                            <div className="sparkles">
                                <span className="sparkle s1">✦</span>
                                <span className="sparkle s2">✦</span>
                                <span className="sparkle s3">✦</span>
                            </div>
                        </div>

                        <div className="bio-content">
                            <p className="bio-intro">
                                Hi! I am <span className="highlight-text">Hammed Amen Allah</span>.
                                I am a passionate Computer Science student and Full Stack Developer based in Tunisia.
                            </p>

                            <p className="bio-paragraph">
                                My primary goal and objective as a developer is to <span className="highlight-text">build scalable solutions</span> that solve real-world problems through clean code and innovative architecture.
                            </p>

                            <p className="bio-paragraph">
                                I focus mainly on <span className="highlight-text">Microservices</span>, <span className="highlight-text">Machine Learning</span>, Web Development, and Distributed Systems for modern tech industries.
                            </p>
                        </div>

                        {/* Education/Stats Mini-Grid (Optional addition to keep content but match style) */}
                        <div className="mini-stats">
                            <div className="stat-item">
                                <span className="stat-label">Degree</span>
                                <span className="stat-value">CS Student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
