import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/tweets">
        Tweets
      </NavLink>
    </header>
  );
};
