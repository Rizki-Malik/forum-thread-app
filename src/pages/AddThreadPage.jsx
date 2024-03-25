import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncCreateThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

export default function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="add-thread-page">
      <div className="thread-form">
        <h2 className="thread-form-header">+ New Thread</h2>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}