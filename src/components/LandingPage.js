import React, { useState } from 'react';
import './LandingPage.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LandingPage = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const handleTransition = (formType) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveForm(formType);
    }, 500); // Wait for hero content to slide out before showing form
  };

  const switchForm = () => {
    setActiveForm(activeForm === 'login' ? 'register' : 'login');
  };

  return (
    <div className={`landing-page ${activeForm ? 'form-active' : ''}`}>
      <header className={`hero ${activeForm ? 'expanded' : ''}`}>
        <div className={`hero-content ${isTransitioning ? 'slide-left' : ''}`}>
          <h1 className="hero-title">Welcome to Our Dental Clinic</h1>
          <p className="hero-subtitle">Your smile is our priority</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleTransition('register')}
            >
              Start Your Smile Journey
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleTransition('login')}
            >
              Access Your Dental Portal
            </button>
          </div>
        </div>
        <div className={`form-container ${activeForm ? 'slide-in' : ''}`}>
          {activeForm === 'login' && <LoginForm />}
          {activeForm === 'register' && <RegisterForm />}
          {activeForm && (
            <button className="btn btn-switch" onClick={switchForm}>
              {activeForm === 'login' ? 'Need to register?' : 'Already have an account?'}
            </button>
          )}
        </div>
      </header>
      
      <section className="features">
        <div className="feature">
          <div className="icon-container">
            <svg className="floating-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="#2193b0" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M15.15,7.85c-0.3-0.3-0.79-0.3-1.09,0L12,9.91L9.94,7.85c-0.3-0.3-0.79-0.3-1.09,0 s-0.3,0.79,0,1.09L11.91,12l-3.06,3.06c-0.3,0.3-0.3,0.79,0,1.09c0.15,0.15,0.35,0.22,0.54,0.22s0.39-0.07,0.54-0.22L12,14.09 l2.06,2.06c0.15,0.15,0.35,0.22,0.54,0.22s0.39-0.07,0.54-0.22c0.3-0.3,0.3-0.79,0-1.09L12.09,12l3.06-3.06 C15.45,8.64,15.45,8.15,15.15,7.85z"/>
            </svg>
          </div>
          <h2>Expert Care</h2>
          <p>Our experienced dentists provide top-notch dental care.</p>
        </div>
        <div className="feature">
          <div className="icon-container">
            <svg className="floating-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="#2193b0" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <h2>Comfortable Experience</h2>
          <p>We ensure a relaxing and pain-free visit.</p>
        </div>
        <div className="feature">
          <div className="icon-container">
            <svg className="floating-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="#2193b0" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
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