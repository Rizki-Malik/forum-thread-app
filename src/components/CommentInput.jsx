import React from 'react';
import PropTypes from 'prop-types';

export default function CommentInput({ addComment }) {
  const [comment, setComment] = React.useState('');

  const onCommentChange = (event) => {
    setComment(event.target.value);
  };

  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };

  return (
    <div className="comment-input">
      <label htmlFor="comment-input" className="comment-label">
        Beri Komentar
      </label>
      <textarea
        id="comment-input"
        className="comment-textarea"
        value={comment}
        onChange={onCommentChange}
        rows="4"
      />
      <button className="comment-submit-button" onClick={onCommentSubmit}>
        Kirim
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};