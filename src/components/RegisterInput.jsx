import React from 'react';
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";

export default function RegisterInput({ register }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  return (
    <form className="register-form">
      <div className="w-72 inline-block justify-center">
        <div className="register-field">
          <input
            title="name"
            type="text"
            id="name"
            className="peer register-input"
            autoFocus
            value={name}
            onChange={setName}
            required
            placeholder=" "
          />
          <label htmlFor="fullName" className="register-label before:content[' '] after:content[' ']">
            Full Name
          </label>
        </div>
        <div className="register-field">
          <input
            title="email"
            type="email"
            id="email"
            className="peer register-input"
            value={email}
            onChange={setEmail}
            required
            placeholder=" "
          />
          <label htmlFor="email" className="register-label before:content[' '] after:content[' ']">
            Email Address
          </label>
        </div>
        <div className="register-field">
          <input
            title="password"
            type="password"
            id="password"
            className="peer register-input"
            value={password}
            onChange={setPassword}
            required
            placeholder=" "
          />
          <label htmlFor="password" className="register-label before:content[' '] after:content[' ']">
            Password
          </label>
        </div>
        <button type="submit" className="register-button" onClick={() => register({ name, email, password })}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
