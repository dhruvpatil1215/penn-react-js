import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-col about">
                        <img className="footer-logo" src={require("../assets/images/all-img/logo.png")} alt="Penn Logo" />
                        <p>Penn Education is dedicated to providing high-quality learning experiences for students around the world.</p>
                        <div className="social-icons">
                            <a href="/" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="/" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                            <a href="/" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="/" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="/">Courses</a></li>
                            <li><a href="/">Pages</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/">Documentation</a></li>
                            <li><a href="/">Forums</a></li>
                            <li><a href="/">Language Packs</a></li>
                            <li><a href="/">Release Status</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Newsletter</h4>
                        <p>Subscribe to get the latest updates.</p>
                        <div className="footer-subscribe">
                            <input type="email" placeholder="Email Address" />
                            <button><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Eduor. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

