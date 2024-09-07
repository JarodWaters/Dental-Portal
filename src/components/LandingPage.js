import React, { useState, useEffect, useRef } from 'react';
import './LandingPage.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LandingPage = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const heroRef = useRef(null);
  const bubblesRef = useRef(null);

  const handleTransition = (formType) => {
    setIsTransitioning(true);
    setActiveForm(formType);
    
    // Create a burst of bubbles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createBubble({
          clientX: Math.random() * window.innerWidth,
          clientY: window.innerHeight
        });
      }, i * 50);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const switchForm = () => {
    setActiveForm(activeForm === 'login' ? 'register' : 'login');
  };

  const createBubble = (e) => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 100 + 50;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${e.clientX - size / 2}px`;
    bubble.style.top = `${e.clientY - size / 2}px`;
    bubblesRef.current.appendChild(bubble);
    setTimeout(() => bubble.remove(), 4000);
  };

  const handleMouseMove = (e) => {
    if (Math.random() < 0.1) {
      createBubble(e);
    }
  };

  useEffect(() => {
    const hero = heroRef.current;
    hero.addEventListener('mousemove', handleMouseMove);
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="landing-page">
      <header ref={heroRef} className="hero">
        <div ref={bubblesRef} className="bubbles"></div>
        <div className={`hero-content ${isTransitioning || activeForm ? 'slide-left' : ''}`}>
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
              <path fill="#2193b0" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M15.15,7.85c-0.3-0.3-0.79-0.3-1.09,0L12,9.91L9.94,7.85c-0.3-0.3-0.79-0.3-1.09,0 s-0.3,0.79,0,1.09L11.91,12l-3.06,3.06c-0.3,0.3-0.3,0.79,0,1.09c0.15,0.15,0.35,0.22,0.54,0.22s0.39-0.07,0.54-0.22L12,14.09 l2.06,2.06c0.15,0.15,0.35,0.22,0.54,0.22s0.39-0.07,0.54-0.22c0.3-0.3,0.3-0.79,0-1.09L12.09,12l3.06-3.06 C15.45,8.64,15.45,8.15,15.15,7.85z"/>
            </svg>
          </div>
          <h2>Expert Care</h2>
          <p>Our experienced dentists provide top-notch dental care.</p>
        </div>
        <div className="feature">
          <div className="icon-container">
            <svg className="floating-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="#2193b0" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8,8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
          <h2>Comfortable Experience</h2>
          <p>We ensure a relaxing and pain-free visit.</p>
        </div>
        <div className="feature">
          <div className="icon-container">
            <svg className="floating-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="#2193b0" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8,8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
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
          <span className="stat-number" data-target="5000">5,000</span>
          <span className="stat-label">Happy Patients</span>
        </div>
        <div className="stat">
          <span className="stat-number" data-target="20">20</span>
          <span className="stat-label">Years of Experience</span>
        </div>
        <div className="stat">
          <span className="stat-number" data-target="50">50</span>
          <span className="stat-label">Dental Awards</span>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;