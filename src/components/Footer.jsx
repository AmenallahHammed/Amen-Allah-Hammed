import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-socials">
                    <a href="https://github.com/AmenallahHammed" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/hammed-amen-allah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:hammedamenallah1@gmail.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Hammed Amen Allah. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
