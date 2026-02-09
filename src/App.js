import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Loader from './components/Loader';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Loader />}
      <div className={`app-content ${loading ? 'loading-hidden' : ''}`}>
        <header className="navbar">
          <div className="header-left">
            <Link to="/">
              <img className="logo" src={require("./assets/images/all-img/logo.png")} alt="Penn Logo" />
            </Link>
          </div>

          <nav>
            <Link to="/">Home <i className="fa-solid fa-chevron-down"></i></Link>
            <Link to="/about">About Us <i className="fa-solid fa-chevron-down"></i></Link>
            <a href="/">Pages <i className="fa-solid fa-chevron-down"></i></a>
            <a href="/">Courses <i className="fa-solid fa-chevron-down"></i></a>
            <a href="/">Blog <i className="fa-solid fa-chevron-down"></i></a>
            <a href="/">Contact</a>
          </nav>

          <div className="header-right">
            <div className="header-icons">
              <div className="icon-item">
                <i className="fa-regular fa-heart"></i>
                <span className="badge">0</span>
              </div>
              <div className="icon-item">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="badge secondary">2</span>
              </div>
            </div>
            <div className="auth">
              <button className="login">Login</button>
              <button className="signup">Sign Up</button>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

