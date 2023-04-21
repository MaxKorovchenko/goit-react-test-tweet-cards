import styles from './UserCard.module.css';

export const UserCard = ({ id, user, avatar, tweets, followers }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={avatar} alt={user} />
      {/* <p>{user}</p> */}
      <div className={styles.info}>
        <p className={styles.stats}>{tweets.toLocaleString('en-US')} Tweets</p>
        <p className={styles.stats}>
          {followers.toLocaleString('en-US')} Followers
        </p>
      </div>

      <button className={styles.btn} type="button">
        Follow
      </button>
    </div>
  );
};
