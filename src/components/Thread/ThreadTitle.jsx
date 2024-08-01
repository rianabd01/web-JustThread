import React from 'react';
import PropTypes from 'prop-types';

export default function ThreadTitle({ title }) {
  return <h3>{title}</h3>;
}

ThreadTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
