import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navigation({ authUser, signOut }) {
  return (
    <header className="navigation">
      <nav className="navigation-bar">
        <Link to="/" className="navigation-brand">
          Forum Apps
        </Link>
        <ul className="navigation-links">
          <li className="navigation-link">
            <Link to="/">Threads</Link>
          </li>
          <li className="navigation-link">
            <Link to="/leaderboards">Leaderboards</Link>
          </li>
        </ul>
        <div className="navigation-user">
          <img
            className="navigation-avatar"
            src={authUser.avatar}
            alt="Avatar"
            width="40"
            height="40"
          />
          <button className="navigation-button" onClick={signOut}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  signOut: PropTypes.func.isRequired,
};