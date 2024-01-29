// client/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Import the CSS file

const Register = () => {
  const [uid, setUid] = useState('');
  const [pwd, setPwd] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', { uid, pwd });
      if (response.data.success) {
        setRegisterMessage('Registration successful');
      } else {
        setRegisterMessage('Registration failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="uid" className="form-label">
            User ID:
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
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
        {registerMessage && <p className="success-message">{registerMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
