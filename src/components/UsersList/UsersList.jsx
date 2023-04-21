import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/tweets/selectors';
import { UserCard } from '../UserCard/UserCard';

import styles from './UsersList.module.css';

export const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <ul className={styles.list}>
      {users.map(({ id, ...restProps }) => (
        <li key={id}>
          <UserCard id={id} {...restProps} />
        </li>
      ))}
    </ul>
  );
};
