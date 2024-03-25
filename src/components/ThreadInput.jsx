import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addThread({ title, body, category });
  };

  return (
    <form className="thread-input-form" onSubmit={handleSubmit}>
      <div className="thread-input-group">
        <label htmlFor="title" className="thread-input-label before:content[' '] after:content[' ']">Judul</label>
        <input
          type="text"
          id="title"
          placeholder=" "
          className="peer thread-input-field"
          value={title}
          required
          onChange={handleTitleChange}
        />
      </div>
      <div className="thread-input-group">
        <label htmlFor="category" className="thread-input-label before:content[' '] after:content[' ']">Kategori</label>
        <input
          type="text"
          id="category"
          placeholder=" "
          className="peer thread-input-field"
          value={category}
          required
          onChange={handleCategoryChange}
        />
      </div>
      <div className="thread-input-group">
        <label htmlFor="body" className="thread-input-label before:content[' '] after:content[' ']">Deskripsi</label>
        <textarea
          id="body"
          placeholder=" "
          className="peer thread-input-field thread-input-textarea"
          rows="4"
          value={body}
          required
          onChange={handleBodyChange}
        />
      </div>
      <button type="submit" className="thread-input-button">Kirim</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};