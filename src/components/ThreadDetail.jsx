import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import VoteButton from './VoteButton';
import postedAt from '../utils/index';

export default function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  NeutralizeVoteThreadDetail,
  authUser,
}) {
  return (
    <div className="thread-detail">
      <div className="thread-detail-header">
        <span className="thread-category">{category}</span>
        <h2 className="thread-title">{title}</h2>
        <div className="thread-content" >{parse(body)}</div>
      </div>
      <div className="thread-detail-actions">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          NeutralizeVote={NeutralizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <div className="thread-detail-info">
          <span className="thread-detail-label">Created By:</span>
          <img className="thread-owner-avatar" src={owner.avatar} alt="Avatar" width="20" height="20" />
          <span className="thread-owner-name">{owner.name}</span>
          <span className="thread-posted-at">{postedAt(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  NeutralizeVoteThreadDetail: PropTypes.func.isRequired,
};
