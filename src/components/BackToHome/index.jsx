import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import './index.css';

export default function BackToHome() {
  return (
    <Link to="/" className="back-to-home">
      <GoArrowLeft />
    </Link>
  );
}
