// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

export default function ThreadBody({ body }) {
  return parse(`<p>${body}</p>`);
}

ThreadBody.propTypes = {
  body: PropTypes.string.isRequired,
};
