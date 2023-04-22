import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUsers } from '../../redux/tweets/selectors';
import { UserCard } from '../UserCard/UserCard';

import styles from './UsersList.module.css';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const [page, setPage] = useState(1);

  const usersGroup = users.slice(0, page * 3);

  const isHidden = page * 3 >= users.length;

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <ul className={styles.list}>
        {usersGroup.map(({ id, ...restProps }) => (
          <li key={id}>
            <UserCard id={id} {...restProps} />
          </li>
        ))}
      </ul>

      {isHidden ? null : (
        <button type="button" onClick={handleClick}>
          Load More
        </button>
      )}
    </>
  );
};
