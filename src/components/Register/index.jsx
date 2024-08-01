import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import { isValidEmail } from '../../utils/helpers';

export default function Register({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [passwordAttention, setPasswordAttention] = useState('');
  const [emailAttention, setEmailAttention] = useState('');

  function handleSubmit() {
    if (password.length >= 6 && isValidEmail(email)) {
      register({ name, email, password });
      setPasswordAttention('');
      setEmailAttention('');
    } else {
      setPasswordAttention('Password minimal 6 karakter');
      setEmailAttention('Email tidak valid');
    }

    if (isValidEmail(email)) {
      setEmailAttention('');
    }

    if (password.length >= 6) {
      setPasswordAttention('');
    }
  }

  return (
    <div className="register">
      <h1>Registrasi</h1>
      <form spellCheck="false" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={onNameChange}
        />
        <input
          type="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={onEmailChange}
        />
        {emailAttention && <p className="error-message">{emailAttention}</p>}
        <input
          type="password"
          placeholder="Masukkan Kata Sandi"
          value={password}
          onChange={onPasswordChange}
        />
        {passwordAttention && (
          <p className="error-message">{passwordAttention}</p>
        )}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};
