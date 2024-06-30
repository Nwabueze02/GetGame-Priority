// Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you would typically handle login logic, such as calling an API
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    
    <div className="login-container">
       <img src="" alt="Logo" className="header-image" />
      <h2>Sign up</h2> 
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
    

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Have an account? <a href="/signup">Sign in</a></p>
    </div>
  );
};


export default Login;
