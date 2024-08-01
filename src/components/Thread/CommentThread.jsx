/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export default function CommentThread({ commentTotal = 0, onDetailNavigate }) {
  return (
    <div className="thread_comment">
      <button
        type="button"
        onClick={onDetailNavigate}
        className="comment-button"
      >
        {commentTotal} Komentar
      </button>
    </div>
  );
}

CommentThread.propTypes = {
  commentTotal: PropTypes.number.isRequired,
  onDetailNavigate: PropTypes.func.isRequired,
};
