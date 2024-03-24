import React from 'react';
import PropTypes from 'prop-types';

export default function RegisterInput({ register }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="w-72 inline-block justify-center">
        <div className="register-field">
          <input
            type="text"
            id="fullName"
            className="peer register-input"
            autoFocus
            value={name}
            onChange={handleNameChange}
            required
            placeholder=" "
          />
          <label htmlFor="fullName" className="register-label before:content[' '] after:content[' ']">
            Full Name
          </label>
        </div>
        <div className="register-field">
          <input
            type="email"
            id="email"
            className="peer register-input"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder=" "
          />
          <label htmlFor="email" className="register-label before:content[' '] after:content[' ']">
            Email Address
          </label>
        </div>
        <div className="register-field">
          <input
            type="password"
            id="password"
            className="peer register-input"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder=" "
          />
          <label htmlFor="password" className="register-label before:content[' '] after:content[' ']">
            Password
          </label>
        </div>
        <button type="submit" className="register-button">
          Sign Up
        </button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
