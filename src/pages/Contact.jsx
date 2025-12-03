import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <div className="contact-page">
            <section className="section">
                <div className="container">
                    <h1 className="section-title">Get In <span className="text-gradient">Touch</span></h1>
                    <p className="section-desc">Have a project in mind or just want to say hi? I'd love to hear from you.</p>

                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="info-card">
                                <div className="info-icon"><FaEnvelope /></div>
                                <div className="info-details">
                                    <h3>Email</h3>
                                    <a href="mailto:hammedamenallah1@gmail.com">hammedamenallah1@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon"><FaPhone /></div>
                                <div className="info-details">
                                    <h3>Phone</h3>
                                    <a href="tel:+21692852350">+216 92 852 350</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon"><FaMapMarkerAlt /></div>
                                <div className="info-details">
                                    <h3>Location</h3>
                                    <p>Zaghouan, Tunis</p>
                                </div>
                            </div>

                            <div className="social-links">
                                <h3>Connect with me</h3>
                                <div className="social-icons">
                                    <a href="https://linkedin.com/in/hammed-amen-allah" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                                    <a href="https://github.com/AmenallahHammed" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    rows="5"
                                ></textarea>
                            </div>

                            <button type="submit" className={`btn btn-primary submit-btn ${status}`}>
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : <>Send Message <FaPaperPlane /></>}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
