import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { editUser } from '../../redux/tweets/operations';

import styles from './UserCard.module.css';

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

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
