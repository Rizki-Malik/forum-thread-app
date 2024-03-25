import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import VoteButton from './VoteButton';
import postedAt from '../utils/index';
import { commentShape } from '../utils/commentShape';

export default function CommentItem({ id, content, createdAt, owner, upVotesBy, downVotesBy, upVote, downVote, NeutralizeVote, authUser }) {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <div className="comment-user">
          <img className="comment-avatar" src={owner.avatar} alt="Avatar" width={20} height={20} />
          <span className="comment-username">{owner.name}</span>
        </div>
        <span className="comment-posted-at">{postedAt(createdAt)}</span>
      </div>
      <div className="comment-content">{parse(content)}</div>
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
    </div>
  );
}

CommentItem.propTypes = {
    ...commentShape,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    NeutralizeVote: PropTypes.func.isRequired,
    authUser: PropTypes.string.isRequired,
};

export { CommentItem, commentShape };