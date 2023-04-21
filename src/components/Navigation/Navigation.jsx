import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </header>
  );
};
