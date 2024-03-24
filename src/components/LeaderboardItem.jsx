import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

export default function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item-user">
        <img className="leaderboard-avatar" src={user.avatar} alt="Avatar" width="34" height="34" />
        <span className="leaderboard-username">{user.name}</span>
      </div>
      <div className="leaderboard-item-score">{score}</div>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
