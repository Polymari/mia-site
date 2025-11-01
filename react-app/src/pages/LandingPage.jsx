import React from 'react';
import './LandingPage.css';

function LandingPage({ onLogin }) {
  const handleRegister = () => {
    // In a real application, this would involve API calls for registration
    // For now, we'll just simulate a successful registration/login
    onLogin();
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <nav className="navbar">
          <div className="logo">MIA Site</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to MIA Site</h1>
            <p>Your one-stop solution for managing your business. Register now to unlock all features!</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleRegister}>Register Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            {/* Placeholder for a compelling hero image */}
            <img src="https://via.placeholder.com/800x500?text=Modern+Business+Solution" alt="Modern Business Solution" />
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>Store Management</h3>
              <p>Easily manage your online store, products, and orders.</p>
            </div>
            <div className="feature-item">
              <h3>Financial Dashboard</h3>
              <p>Keep track of your finances with an intuitive dashboard.</p>
            </div>
            <div className="feature-item">
              <h3>Marketplace Integration</h3>
              <p>Connect with various marketplaces to expand your reach.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>MIA Site is dedicated to empowering small and medium businesses with powerful digital tools.</p>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to us!</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="landing-footer">
        <p>&copy; 2025 MIA Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;