import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState('');
  const navigate = useNavigate();

  const handleTransition = (target) => {
    setIsTransitioning(true);
    setTransitionTarget(target);
    setTimeout(() => {
      navigate(target);
    }, 1500); // Total transition time: 1.5 seconds
  };

  return (
    <div className={`landing-page ${isTransitioning ? 'transitioning' : ''}`}>
      <header className="hero">
        <div className={`hero-content ${isTransitioning ? 'slide-left' : ''}`}>
          <h1 className="animated-text">Welcome to Our Dental Clinic</h1>
          <p className="animated-text">Your smile is our priority</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleTransition('/register')}
            >
              Start Your Smile Journey
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleTransition('/login')}
            >
              Access Your Dental Portal
            </button>
          </div>
        </div>
      </header>
      <div className={`expanding-background ${isTransitioning ? 'expand' : ''}`}></div>
      
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
    </div>
  );
};

export default LandingPage;