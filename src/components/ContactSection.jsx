import { useState } from 'react';
import './ContactSection.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection({ id = 'contact' }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <section id={id} className="section contact-section">
            {/* Background Text */}
            <div className="bg-text">CONTACT</div>

            <div className="contact-container">
                {/* Left Column: Info */}
                <div className="contact-left">
                    <div className="contact-badge">
                        <span className="badge-icon">?</span> Contact
                    </div>

                    <h1 className="contact-heading">Get in touch</h1>
                    <p className="contact-subheading">
                        Have questions or ready to transform your ideas into reality?
                        Let's build something amazing together.
                    </p>

                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="card-icon-wrapper">
                                <FaEnvelope className="card-icon" />
                            </div>
                            <div className="card-info">
                                <h3>Email us</h3>
                                <p>hammedamenallah1@gmail.com</p>
                            </div>
                            <a href="mailto:hammedamenallah1@gmail.com" className="card-arrow">
                                <FaArrowRight />
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon-wrapper">
                                <FaPhone className="card-icon" />
                            </div>
                            <div className="card-info">
                                <h3>Call us</h3>
                                <p>+216 92 852 350</p>
                            </div>
                            <a href="tel:+21692852350" className="card-arrow">
                                <FaArrowRight />
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon-wrapper">
                                <FaLinkedin className="card-icon" />
                            </div>
                            <div className="card-info">
                                <h3>LinkedIn</h3>
                                <p>Connect professionally</p>
                            </div>
                            <a href="https://linkedin.com/in/hammed-amen-allah" target="_blank" rel="noopener noreferrer" className="card-arrow">
                                <FaArrowRight />
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon-wrapper">
                                <FaGithub className="card-icon" />
                            </div>
                            <div className="card-info">
                                <h3>GitHub</h3>
                                <p>Check my repositories</p>
                            </div>
                            <a href="https://github.com/AmenallahHammed" target="_blank" rel="noopener noreferrer" className="card-arrow">
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="contact-right">
                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                {submitted ? 'Message Sent!' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
