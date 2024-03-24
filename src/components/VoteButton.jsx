import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaRegThumbsDown, FaThumbsDown, FaRegThumbsUp } from 'react-icons/fa';

export default function VoteButton({
  id,
  upVote,
  downVote,
  NeutralizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const [voteState, setVoteState] = useState(null);

  const handleClick = (voteType) => {
    if (voteState === voteType) {
      NeutralizeVote(id);
      setVoteState(null);
    } else {
      if (voteType === 'up') {
        upVote(id, authUser);
      } else {
        downVote(id, authUser);
      }
      setVoteState(voteType);
    }
  };

  return (
    <div className="vote-button">
      <span
        className={`up-button group ${voteState === 'up' ? 'active' : ''}`}
        onClick={() => handleClick('up')}
      >
        {voteState === 'up' ? (
          <FaThumbsUp className="vote-button-icon neutral-up-vote" alt="Upvote" />
        ) : (
          <FaRegThumbsUp className="vote-button-icon up-vote" alt="Upvote" />
        )}
        <span className="vote-count">{upVotesBy.length}</span>
      </span>
      <span
        className={`down-button group ${voteState === 'down' ? 'active' : ''}`}
        onClick={() => handleClick('down')}
      >
        {voteState === 'down' ? (
          <FaThumbsDown className="vote-button-icon neutral-down-vote" alt="Downvote" />
        ) : (
          <FaRegThumbsDown className="vote-button-icon down-vote" alt="Downvote" />
        )}
        <span className="vote-count">{downVotesBy.length}</span>
      </span>
    </div>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  NeutralizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};