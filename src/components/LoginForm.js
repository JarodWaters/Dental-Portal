import React from 'react';
import './AuthForms.css';

const LoginForm = () => {
  return (
    <div className="auth-form">
      <h2>Access Your Dental Portal</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
