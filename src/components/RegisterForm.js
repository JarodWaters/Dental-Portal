import React from 'react';
import './AuthForms.css';

const RegisterForm = () => {
  return (
    <div className="auth-form">
      <h2>Start Your Smile Journey</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
