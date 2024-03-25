import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

export default function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item-user">
        <img className="leaderboard-avatar" src={user.avatar} alt="Avatar" width="34" height="34" />
      </div>
      <div className="flex-1">
        <div className="leaderboard-username">{user.name}</div>
      </div>
      <span className="leaderboard-item-score">{score}</span>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
