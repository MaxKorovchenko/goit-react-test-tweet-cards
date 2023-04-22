import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';

import styles from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={styles.link} to={to}>
      <ImArrowLeft />
      {children}
    </Link>
  );
};
