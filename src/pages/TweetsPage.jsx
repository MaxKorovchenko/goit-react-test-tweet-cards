import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/tweets/operations';
import { UsersList } from '../components/UsersList/UsersList';

import { BackLink } from '../components/BackLink/BackLink';
import { Dropdown } from '../components/Dropdown/Dropdown';

const TweetsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <BackLink to="/">Back to the Home Page</BackLink>
        <Dropdown />
      </div>

      <UsersList />
    </>
  );
};

export default TweetsPage;
