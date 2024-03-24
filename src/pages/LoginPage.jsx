import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <div className="signin-page">
      <main className="signin-main">
        <h1 className="signin-title">Sign in Forum Apps</h1>
        <LoginInput login={onLogin} />
        <p className="signin-link">
          Don`t have an account? <Link to="/register" className='underline'>Sign Up</Link>
        </p>
      </main>
    </div>
  );
}