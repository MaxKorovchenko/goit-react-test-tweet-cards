export const UserCard = ({ id, user, avatar, tweets, followers }) => {
  return (
    <div>
      <img src={avatar} alt={user} />
      <p>{user}</p>
      <p>{tweets}</p>
      <p>{followers}</p>
    </div>
  );
};
