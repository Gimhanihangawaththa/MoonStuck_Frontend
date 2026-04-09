import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css'; 

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple hardcoded check; replace with real auth call when backend is ready.
    if (email === 'gimshi' && password === 'gimshi123') {
      setStatus('success');
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      navigate('/home');
      return;
    }

    setStatus('error');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Username'
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        {status === 'success' && (
          <p className="loginsignup-success">Logged in as gimshi.</p>
        )}
        {status === 'error' && (
          <p className="loginsignup-error">Invalid credentials. Please try again.</p>
        )}

        <p className="loginsignup-login">
          Don't have an account? <Link to="/signup"><span>Sign Up</span></Link>
        </p>
        <div className="loginsignup-agree">
          <p>Forgot your password? <span>Reset here</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
