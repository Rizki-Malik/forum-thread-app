import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import postedAt from '../utils/index';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  NeutralizeVote,
  authUser,
}) {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <div className="comment-user">
          <img className="comment-avatar" src={owner.avatar} alt="Avatar" width="20" height="20" />
          <span className="comment-username">{owner.name}</span>
        </div>
        <span className="comment-posted-at">{postedAt(createdAt)}</span>
      </div>
      <div className="comment-content" dangerouslySetInnerHTML={{ __html: parse(content) }} />
      <div className="comment-actions">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          NeutralizeVote={NeutralizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
      <hr className="comment-divider" />
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  NeutralizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export { commentShape };