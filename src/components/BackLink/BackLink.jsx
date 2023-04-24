import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import PropTypes from 'prop-types';

import styles from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={styles.link} to={to}>
      <ImArrowLeft />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
