import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CommentInput({ onAddComment }) {
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (content.trim()) {
      onAddComment({ content });
      setContent('');
    } else {
      alert('Belum ada komentar');
    }
  }

  function handleCommentChange({ target }) {
    setContent(target.value);
  }

  return (
    <form action="" className="comment-input" onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={handleCommentChange} />
      <button type="submit">Kirim</button>
    </form>
  );
}

CommentInput.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};
