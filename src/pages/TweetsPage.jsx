import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../redux/tweets/operations';
import { selectError, selectIsLoading } from '../redux/tweets/selectors';
import { UsersList } from '../components/UsersList/UsersList';
import { BackLink } from '../components/BackLink/BackLink';
import { Dropdown } from '../components/Dropdown/Dropdown';
import Loader from '../components/Loader/Loader';
import { Scroll } from '../components/Scroll/Scroll';

const TweetsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Ooooops... something went wrong 😥 {error}</p>}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <BackLink to="/">Back to the Home Page</BackLink>
        <Dropdown />
      </div>

      <UsersList />

      <Scroll />
    </>
  );
};

export default TweetsPage;
