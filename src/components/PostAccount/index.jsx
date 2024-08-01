import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function PostAccount({ image = '/userphoto.png', name }) {
  return (
    <div className="post-account">
      <img src={image} alt="userphoto" />
      <p>{name}</p>
    </div>
  );
}

PostAccount.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
