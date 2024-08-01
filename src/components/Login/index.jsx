import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import useInput from '../../hooks/useInput';

export default function Login({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="login">
      <h1>Login</h1>
      <form
        autoComplete="off"
        spellCheck="false"
        onSubmit={(event) => {
          event.stopPropagation();
          event.preventDefault();
          login({ email, password });
        }}
      >
        <input
          type="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="Masukkan Kata Sandi"
          value={password}
          onChange={onPasswordChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
