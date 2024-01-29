// client/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [uid, setUid] = useState('');
  const [pwd, setPwd] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { uid, pwd });

      if (response.data.success) {
        setLoginSuccess(true);
        navigate('/employee-list');
      } else {
        console.log('Login failed:', response.data.message);
        setLoginSuccess(false);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setLoginSuccess(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="uid" className="form-label">
            UID:
          </label>
          <input
            type="text"
            className="form-control"
            id="uid"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>

      {loginSuccess && <div className="alert alert-success mt-3">Login successful!</div>}
    </div>
  );
};

export default Login;
