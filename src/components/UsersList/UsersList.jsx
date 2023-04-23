import { useSelector } from 'react-redux';
import { useState } from 'react';

import { selectVisibleUsers } from '../../redux/filter/selectors';
import { UserCard } from '../UserCard/UserCard';

import styles from './UsersList.module.css';

export const UsersList = () => {
  const visibleUsers = useSelector(selectVisibleUsers);
  const [page, setPage] = useState(1);

  const usersGroup = visibleUsers.slice(0, page * 3);

  const isHidden = page * 3 >= visibleUsers.length;

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <ul className={styles.list}>
        {usersGroup.map(({ id, ...restProps }) => (
          <li className={styles.item} key={id}>
            <UserCard id={id} {...restProps} />
          </li>
        ))}
      </ul>

      {isHidden ? null : (
        <button className={styles.btn} type="button" onClick={handleClick}>
          Load More
        </button>
      )}
    </>
  );
};
