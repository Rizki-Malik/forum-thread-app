import PropTypes from 'prop-types';
import VoteButton from './VoteButton';
import postedAt from '../utils';
import { FaComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import  useExcerpt from '../utils/excerpt';
import parse from 'html-react-parser';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  NeutralizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };
  const excerpt = useExcerpt(body);
  return (
    <div className="thread-item">
      <div className="thread-item-header">
        <div className="thread-category">{category}</div>
        <h2 className="thread-title" onClick={onThreadClick}>{title}</h2>
        <div className="thread-content">{parse(excerpt)}</div>
      </div>
      <div className="thread-actions">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          NeutralizeVote={NeutralizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <span className="thread-comments" onClick={onThreadClick}>
          <FaComment className="mr-1"/>
          {totalComments} Comments
        </span>
        <div className="thread-info">
          <span className="thread-info-label">Made by :</span>
          <span className="thread-owner-name">{threadOwner.name}</span>
          <span className="thread-posted-at">{postedAt(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  NeutralizeVote: PropTypes.func.isRequired,
};

export { threadItemShape, userShape };