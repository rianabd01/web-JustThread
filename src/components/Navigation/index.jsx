import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { GoHome, GoPerson, GoSignIn, GoSignOut } from 'react-icons/go';
import './index.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function Navigation({ signOut }) {
  const { authUser = null } = useSelector((states) => states);

  return (
    <nav className="navigation container">
      <ul>
        <li>
          <Link to="/" className="navigation_link">
            <GoHome className="navigation_icon" />
            <span className="navigation_link_text">Home</span>
          </Link>
        </li>
        {authUser ? (
          <li>
            <button type="button" onClick={signOut} className="navigation_link">
              <GoSignOut className="navigation_icon" />
              <span className="navigation_link_text">Sign out</span>
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className="navigation_link">
                <GoSignIn className="navigation_icon" />
                <span className="navigation_link_text">Sign in</span>
              </Link>
            </li>
            <li>
              <Link to="/register" className="navigation_link">
                <GoPerson className="navigation_icon" />
                <span className="navigation_link_text">Register</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};
