import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            {/* ABOUT HERO */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <span className="small-title">ABOUT US</span>
                    <h1>We Are <span className="green">Penn</span> Education</h1>
                    <p>Empowering learners worldwide with quality education and innovative teaching methods.</p>
                </div>
            </section>

            {/* MISSION VISION */}
            <section className="mission-vision-section">
                <div className="mv-container">

                    <div className="mv-card">
                        <div className="mv-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" stroke="#27CB8B" strokeWidth="2" />
                                <path d="M8 14L7 22L12 19L17 22L16 14" stroke="#27CB8B" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3>Our Mission</h3>
                        <p>To provide accessible, high-quality education that empowers individuals to achieve their full potential and make a positive impact in the world.</p>
                    </div>

                    <div className="mv-card">
                        <div className="mv-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <path d="M12 3L13.5 9L20 12L13.5 15L12 21L10.5 15L4 12L10.5 9L12 3Z" stroke="#27CB8B" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3>Our Vision</h3>
                        <p>To become the world's leading online education platform, fostering a global community of lifelong learners and innovative thinkers.</p>
                    </div>

                    <div className="mv-card">
                        <div className="mv-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="#27CB8B" strokeWidth="2" />
                                <path d="M12 7v5l3 3" stroke="#27CB8B" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3>Our Values</h3>
                        <p>Excellence, innovation, inclusivity, and integrity guide everything we do as we strive to transform education globally.</p>
                    </div>

                </div>
            </section>

            {/* STATS */}
            <section className="about-stats-section">
                <div className="about-stats-container">
                    <div className="stat-box">
                        <h2>15+</h2>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-box">
                        <h2>8K+</h2>
                        <p>Students Enrolled</p>
                    </div>
                    <div className="stat-box">
                        <h2>500+</h2>
                        <p>Online Courses</p>
                    </div>
                    <div className="stat-box">
                        <h2>120+</h2>
                        <p>Expert Teachers</p>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="team-section">
                <div className="team-container">
                    <span className="small-title">OUR TEAM</span>
                    <h2>Meet Our <span>Expert Instructors</span></h2>

                    <div className="team-grid">
                        <div className="team-card">
                            <img src={require("../assets/images/all-img/team1.jpg")} alt="Team Member" />
                            <div className="team-info">
                                <h4>John Smith</h4>
                                <p>Senior Instructor</p>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src={require("../assets/images/all-img/team2.jpg")} alt="Team Member" />
                            <div className="team-info">
                                <h4>Sarah Johnson</h4>
                                <p>Design Expert</p>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src={require("../assets/images/all-img/team3.jpg")} alt="Team Member" />
                            <div className="team-info">
                                <h4>Mike Williams</h4>
                                <p>Tech Lead</p>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src={require("../assets/images/all-img/team4.jpg")} alt="Team Member" />
                            <div className="team-info">
                                <h4>Emily Davis</h4>
                                <p>Marketing Head</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta-section">
                <div className="about-cta-container">
                    <h2>Ready to Start Your Learning Journey?</h2>
                    <p>Join thousands of students already learning with Penn Education.</p>
                    <button className="cta-btn-large">Get Started Today</button>
                </div>
            </section>
        </div>
    );
};

export default About;
