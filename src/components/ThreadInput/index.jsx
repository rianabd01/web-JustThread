import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';

export default function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      addThread({ title, body, category });
      setTitle('');
      setBody('');
      setCategory('');
    } else {
      alert('Tolong lengkapi kolom');
    }
  }

  function handleTitleChange({ target }) {
    if (target.value.length <= 320) {
      setTitle(target.value);
    }
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }
  function handleCategoryChange({ target }) {
    if (target.value.length <= 320) {
      setCategory(target.value);
    }
  }

  return (
    <div className="thread_input">
      <form action="submit" onSubmit={handleSubmit} spellCheck="false">
        <input
          type="text"
          name="title"
          placeholder="Apa yang ingin kamu bagi"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          type="text"
          name="body"
          placeholder="Ceritakan disini"
          value={body}
          onChange={handleBodyChange}
        />
        <input
          type="text"
          name="category"
          placeholder="kategori"
          value={category}
          onChange={handleCategoryChange}
        />
        <button type="submit">Posting</button>
      </form>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
