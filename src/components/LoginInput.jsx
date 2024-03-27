import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function LoginInput({ login }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="w-72 inline-block justify-center">
        <div className="login-field">
          <input
            className="peer login-input"
            type="email"
            title="email"
            id="email"
            value={email}
            onChange={setEmail}
            autoFocus
            placeholder=" "
          />
          <label className="login-label before:content[' '] after:content[' ']">Email Address</label>
        </div>
        <div className="login-field">
          <input
            type="password"
            title="password"
            id="password"
            className="peer login-input"
            value={password}
            onChange={setPassword} 
            placeholder=" "
          />
          <label className="login-label before:content[' '] after:content[' ']">Password</label>
        </div>
        <button type="submit" className="login-button" onClick={() => login({ email, password })}>Sign In</button>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};