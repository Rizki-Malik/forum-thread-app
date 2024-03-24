import React from 'react';
import PropTypes from 'prop-types';

export default function LoginInput({ login }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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
            id="email"
            value={email}
            onChange={handleEmailChange}
            autoFocus
            placeholder=" " />
          <label
            className="login-label before:content[' '] after:content[' ']">Email Address
          </label>
        </div>
        <div className="login-field">
          <input
            type="password"
            id="password"
            className="peer login-input"
            value={password}
            onChange={handlePasswordChange}
            placeholder=" " />
          <label
            className="login-label before:content[' '] after:content[' ']">Password
          </label>
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};