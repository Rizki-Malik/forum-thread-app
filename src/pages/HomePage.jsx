import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';
import AddButton from '../components/AddThreadButton';
import CategoryFilters from '../utils/CategoryFilters';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralizeVoteThread = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="home-page">
      <CategoryFilters categories={new Set(threads.map((thread) => thread.category))}  onFilterChange={setFilter} />

      <ThreadsList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        NeutralizeVote={onNeutralizeVoteThread}
      />

      <AddButton/>
    </div>
  );
}

export default HomePage;
