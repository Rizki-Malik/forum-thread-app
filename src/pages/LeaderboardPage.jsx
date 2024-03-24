import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';
import LeaderboardItem from '../components/LeaderboardItem';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <div className="leaderboards-page">
      <div className="leaderboards-card">
        <h2 className="leaderboards-title">Leaderboards</h2>
        <div className="leaderboards-headers">
          <span className="leaderboards-username-header">10 Pengguna Teratas</span>
          <span className="leaderboards-score-header">Skor</span>
        </div>
        <ul className="leaderboards-list">
          {leaderboards.map(({ user, score }) => (
            <LeaderboardItem key={user.id} user={user} score={score} />
          ))}
        </ul>
      </div>
    </div>
  );
}