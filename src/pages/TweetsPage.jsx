import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/tweets/operations';
import { UsersList } from '../components/UsersList/UsersList';

import { BackLink } from '../components/BackLink/BackLink';

const TweetsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <BackLink to="/">Back to the Home Page</BackLink>

      <UsersList />
    </>
  );
};

export default TweetsPage;
