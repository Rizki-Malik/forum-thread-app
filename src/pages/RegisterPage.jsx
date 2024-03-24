import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <div className="register-page">
      <main className="register-main">
        <h1 className="register-title">Sign Up</h1>
        <RegisterInput register={onRegister} />
        <p className="register-link">
          Already have an account? <Link to="/login" className='underline'>Sign in</Link>
        </p>
      </main>
    </div>
  );
}