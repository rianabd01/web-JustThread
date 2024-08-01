import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import './index.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header container">
        <h1 className="header_logo">JustThread</h1>
        <Link to="/most-active" className="header_leaderboard">
          <FaFire />
        </Link>
      </div>
    </header>
  );
}
