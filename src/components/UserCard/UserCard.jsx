import { useDispatch } from 'react-redux';
import styles from './UserCard.module.css';
import { editUser } from '../../redux/tweets/operations';

export const UserCard = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  isFollowing,
}) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      editUser(
        isFollowing
          ? { id, followers: followers - 1, isFollowing: false }
          : { id, followers: followers + 1, isFollowing: true }
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={avatar} alt={user} />

      <div className={styles.info}>
        <p className={styles.stats}>{tweets.toLocaleString('en-US')} Tweets</p>
        <p className={styles.stats}>
          {followers.toLocaleString('en-US')} Followers
        </p>
      </div>

      <button
        className={isFollowing ? styles.active : styles.btn}
        type="button"
        onClick={handleUpdate}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};
