import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/tweets/operations';
import { UsersList } from '../components/UsersList/UsersList';

const TweetsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main>
      <UsersList />
    </main>
  );
};

export default TweetsPage;
