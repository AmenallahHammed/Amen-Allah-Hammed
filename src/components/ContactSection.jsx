import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';
import { FaEnvelope, FaPhone, FaArrowRight, FaLinkedin, FaGithub, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function ContactSection({ id = 'contact' }) {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Status: idle, sending, success, error
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // ----------------------------------------------------------------------
        // EMAILJS SETUP INSTRUCTIONS:
        // 1. Create account at https://www.emailjs.com/
        // 2. Add Email Service (e.g., Gmail) -> Get Service ID
        // 3. Create Email Template -> Get Template ID
        //    - Use variable names: {{user_name}}, {{user_email}}, {{message}}
        // 4. Get Public Key from Account > General
        // 5. Replace the placeholders below:
        // ----------------------------------------------------------------------

        const SERVICE_ID = 'service_a5p290n';
        const TEMPLATE_ID = 'template_16rb4rv';
        const PUBLIC_KEY = 'FstV21NJeOKvYLMpz';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus('success');
                setFormData({ user_name: '', user_email: '', message: '' }); // Clear form
                setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
            }, (error) => {
                setStatus('error');
                setErrorMessage('Message failed to send. Please try again later.');
                console.error(error.text);
            });
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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    disabled={status === 'sending'}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    disabled={status === 'sending'}
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Your Message..."
                                    required
                                    disabled={status === 'sending'}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${status}`}
                                disabled={status === 'sending' || status === 'success'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <FaSpinner className="spinner" /> Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <FaCheckCircle /> Message Sent!
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <FaExclamationCircle /> Try Again
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="error-message">{errorMessage}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
