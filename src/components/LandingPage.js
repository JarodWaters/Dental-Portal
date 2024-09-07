import React from 'react';
import TeethChart from './TeethChart';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1 className="animated-text">Welcome to Our Dental Clinic</h1>
        <p className="animated-text">Your smile is our priority</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Your Smile Journey</button>
          <button className="btn btn-secondary">Access Your Dental Portal</button>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <i className="fas fa-tooth floating-icon"></i>
          <h2>Expert Care</h2>
          <p>Our experienced dentists provide top-notch dental care.</p>
        </div>
        <div className="feature">
          <i className="fas fa-smile floating-icon"></i>
          <h2>Comfortable Experience</h2>
          <p>We ensure a relaxing and pain-free visit.</p>
        </div>
        <div className="feature">
          <i className="fas fa-clock floating-icon"></i>
          <h2>Flexible Hours</h2>
          <p>Open evenings and weekends for your convenience.</p>
        </div>
      </section>

      <section className="parallax-section">
        <div className="parallax-content">
          <h2>State-of-the-Art Facilities</h2>
          <p>Experience dental care with cutting-edge technology</p>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <span className="stat-number" data-target="5000">0</span>
          <span className="stat-label">Happy Patients</span>
        </div>
        <div className="stat">
          <span className="stat-number" data-target="20">0</span>
          <span className="stat-label">Years of Experience</span>
        </div>
        <div className="stat">
          <span className="stat-number" data-target="50">0</span>
          <span className="stat-label">Dental Awards</span>
        </div>
      </section>

      <TeethChart />

      {/* Rest of your content */}
    </div>
  );
};

export default LandingPage;
