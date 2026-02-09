import React from 'react';

const Home = () => {
    return (
        <div>
            {/* ================= HERO ================= */}
            <section className="hero">
                <div className="hero-bg-shapes">
                    <span className="shape circle-green"></span>
                    <span className="shape circle-pink"></span>
                    <span className="shape ring-light"></span>
                </div>

                {/* LEFT */}
                <div className="hero-left">
                    <h1>
                        Better <span className="green">Learning</span><br />
                        <span className="green">Future</span> Starts<br />
                        With Penn
                    </h1>

                    <p>
                        It is a long established fact that reader will be distracted
                        readable content of a page when.
                    </p>

                    <div className="cta-wrap">
                        <span className="cta-circle"></span>
                        <button className="cta">EXPLORE COURSES <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="hero-right">
                    <img className="hero-img" src={require("../assets/images/all-img/home-image.png")} alt="Hero Image" />

                    <div className="card students">
                        <div className="card-icon">
                            <i className="fa-solid fa-users-viewfinder"></i>
                        </div>
                        <div className="card-text">
                            <span className="count">7500+</span>
                            <span className="label">Active student</span>
                        </div>
                    </div>

                    <div className="card courses">
                        <div className="card-icon secondary">
                            <i className="fa-regular fa-file-lines"></i>
                        </div>
                        <div className="card-text">
                            <span className="count">4500+</span>
                            <span className="label">Online Course</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-row">
                <div className="feature-box">
                    <h3>Quality Education</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                    <a href="/" className="feature-btn">EXPLORE →</a>
                </div>

                <div className="feature-box">
                    <h3>Experienced Teachers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                    <a href="/" className="feature-btn">EXPLORE →</a>
                </div>

                <div className="feature-box">
                    <h3>Delicious Food</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                    <a href="/" className="feature-btn">EXPLORE →</a>
                </div>
            </section>

            <section className="about-section">
                <div className="about-container">
                    {/* LEFT IMAGE */}
                    <div className="about-left">
                        <img src={require("../assets/images/all-img/about1.png")} className="about-img" alt="About" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="about-right">
                        <h1>
                            Learn New Skills To Go <span>Ahead</span><br />
                            For Your Career.
                        </h1>

                        <p className="about-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                        </p>

                        {/* CARD 1 */}
                        <div className="about-card">
                            <div className="icon-circle">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="4" stroke="#27CB8B" strokeWidth="2" />
                                    <path d="M8 14L7 22L12 19L17 22L16 14" stroke="#27CB8B" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <h3>Our Mission</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="about-card">
                            <div className="icon-circle">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 3L13.5 9L20 12L13.5 15L12 21L10.5 15L4 12L10.5 9L12 3Z"
                                        stroke="#27CB8B"
                                        strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <h3>Our Vision</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <button className="about-btn">Discover More</button>
                    </div>
                </div>
            </section>

            <section className="achievement-section">
                <div className="achievement-container">
                    <span className="small-title">SOME FUN FACT</span>
                    <h2>Our Great <span>Achievement</span></h2>
                    <div className="achievement-grid">
                        {/* ... stats ... */}
                        <div className="achievement-box blue">
                            <div className="ach-icon">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                                    <path d="M4 21c0-4 16-4 16 0" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="ach-text">
                                <h3>8232</h3>
                                <p>Enrolled Students</p>
                            </div>
                        </div>

                        <div className="achievement-box orange">
                            <div className="ach-icon">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <rect x="4" y="3" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 7h4M8 11h4" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="ach-text">
                                <h3>521</h3>
                                <p>Academic Programs</p>
                            </div>
                        </div>

                        <div className="achievement-box green">
                            <div className="ach-icon">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                    <path d="M5 5l3 3M19 5l-3 3M5 19l3-3M19 19l-3-3"
                                        stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="ach-text">
                                <h3>163</h3>
                                <p>Winning Award</p>
                            </div>
                        </div>

                        <div className="achievement-box pink">
                            <div className="ach-icon">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                                    <path d="M6 21c0-3 12-3 12 0" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="ach-text">
                                <h3>93</h3>
                                <p>Certified Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trusted-section">
                <div className="trusted-container">
                    <div className="trusted-title">
                        Trusted Company Around The World!
                    </div>
                    <div className="slider-wrapper">
                        <div className="slider-track" id="logoTrack">
                            <img src={require("../assets/images/client/1.png")} alt="Client 1" />
                            <img src={require("../assets/images/client/2.png")} alt="Client 2" />
                            <img src={require("../assets/images/client/3.png")} alt="Client 3" />
                            <img src={require("../assets/images/client/4.png")} alt="Client 4" />
                            <img src={require("../assets/images/client/5.png")} alt="Client 5" />
                            <img src={require("../assets/images/client/3.png")} alt="Client 3" />
                            <img src={require("../assets/images/client/1.png")} alt="Client 1" />
                            <img src={require("../assets/images/client/2.png")} alt="Client 2" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="features-container">
                    <span className="small-title">WHY CHOOSE PENN</span>
                    <h2>Find The <span>Best Features</span> Of Penn.</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon mint">📖</div>
                            <h3>Learn More Anywhere</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon cyan">❤</div>
                            <h3>Expert Instructor</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon blue">👤</div>
                            <h3>Team Management</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon mint">👁</div>
                            <h3>Course Planning</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon orange">💡</div>
                            <h3>Teacher Monitoring</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon green">✉</div>
                            <h3>24/7 Strong Support</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="courses-section">
                <div className="courses-container">
                    <span className="small-title">POPULAR COURSES</span>
                    <h2>Choose Our <span>Top Courses</span></h2>
                    <div className="courses-grid">
                        <div className="course-card">
                            <div className="course-img">
                                <span className="price">$49</span>
                                <img src={require("../assets/images/all-img/c1.png")} alt="Course" />
                            </div>
                            <div className="course-body">
                                <span className="tag">Arts & Design</span>
                                <h3>Basic Fundamentals Of Interior & Graphics Design</h3>
                                <div className="course-meta">
                                    <span>3 Lessons</span>
                                    <span>3h 45m</span>
                                    <span>4.9</span>
                                </div>
                                <p className="seat">30 Seats Available</p>
                            </div>
                        </div>
                        {/* ... other courses ... */}
                        {[2, 3, 4, 5, 6].map(num => (
                            <div className="course-card" key={num}>
                                <div className="course-img">
                                    <span className="price">${20 + num * 10}</span>
                                    <img src={require(`../assets/images/all-img/c${num}.png`)} alt="Course" />
                                </div>
                                <div className="course-body">
                                    <span className="tag">Category</span>
                                    <h3>Course Title {num}</h3>
                                    <div className="course-meta">
                                        <span>{num} Lessons</span>
                                        <span>{num}h 0m</span>
                                        <span>4.{num}</span>
                                    </div>
                                    <p className="seat">10 Seats Available</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <button className="view-btn">View All Course</button>
                    </div>
                </div>
            </section>

            <section className="platform-section">
                <div className="platform-container">
                    <div className="platform-left">
                        <span className="platform-small">Best Online Learning Platform</span>
                        <h2>One Platform & Many<br /><span>Courses</span> For You</h2>
                        <p>From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>
                        <ul className="platform-list">
                            <li>9/10 Average Satisfaction Rate</li>
                            <li>96% Completion Rate</li>
                            <li>Friendly Environment & Expert Teacher</li>
                        </ul>
                        <div className="cta-wrap">
                            <span className="cta-circle"></span>
                            <button className="cta">EXPLORE OUR COURSES →</button>
                        </div>
                    </div>
                    <div className="platform-right">
                        <img src={require("../assets/images/all-img/promo (1).png")} className="platform-img" alt="Promo" />
                    </div>
                </div>
            </section>

            <section className="newsletter-section">
                <div className="newsletter-container">
                    <h2>Subscribe to our newsletter,<br />We don't make any spam.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter Your Email Address" />
                        <button><i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </section>

            <section className="topics-section">
                <div className="topics-container">
                    <span className="topics-small">START LEARNING</span>
                    <h2>Popular <span>Topics To Learn</span> From Today.</h2>
                    <div className="topics-grid">
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <div className="topic-card" key={num}>
                                <img src={require(`../assets/images/all-img/ct${num}.svg`)} className="topic-icon" alt="Topic" />
                                <div>
                                    <h3>Topic {num}</h3>
                                    <p>Courses Available</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="events-section">
                <div className="events-container">
                    <h2>Join With Us <span>Our Events</span></h2>
                    <div className="events-grid">
                        {/* Simplified for brevity while keeping structure */}
                        <div className="event-card large">
                            <div className="event-img">
                                <img src={require("../assets/images/all-img/e1.png")} alt="Event" />
                                <div className="date-badge"><strong>20</strong><span>Oct</span></div>
                            </div>
                            <div className="event-body">
                                <h3>Electrical Engineering Of Batparder New Event</h3>
                                <div className="event-meta"><span>10.00AM - 12.00PM</span><span>At Penn School</span></div>
                                <p>Lorem ipsum dolor sit amet magna consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="event-card large">
                            <div className="event-img">
                                <img src={require("../assets/images/all-img/e2.png")} alt="Event" />
                                <div className="date-badge"><strong>22</strong><span>Oct</span></div>
                            </div>
                            <div className="event-body">
                                <h3>Architecture Design Of International Art Fair 2023</h3>
                                <div className="event-meta"><span>10.00AM - 12.00PM</span><span>At Penn School</span></div>
                                <p>Lorem ipsum dolor sit amet magna consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial-section">
                <div className="testimonial-container">
                    <span className="small-title">TESTIMONIAL</span>
                    <h2>What Says <span>Our Students</span></h2>
                    <div className="testimonial-wrapper">
                        <div className="testimonial-track">
                            {[1, 2, 3].map(num => (
                                <div className={`testimonial-card ${num === 1 ? 'green' : num === 2 ? 'yellow' : 'blue'}`} key={num}>
                                    <div className="stars">★★★★★</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                                    <div className="user">
                                        <img src={require(`../assets/images/all-img/t${num}.png`)} alt="User" />
                                        <div>
                                            <h4>User {num}</h4>
                                            <span>Expert</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

