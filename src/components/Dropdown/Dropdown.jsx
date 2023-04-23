import { useEffect, useState, useRef } from 'react';

import styles from './Dropdown.module.css';

export const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = e => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div ref={menuRef}>
      <button
        className={styles.trigger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        Filter Tweets
      </button>

      <div className={open ? styles.active : styles.inactive}>
        <ul>
          <li className="dropdownItem">
            <p>Show All</p>
          </li>
          <li className="dropdownItem">
            <p>Follow</p>
          </li>
          <li className="dropdownItem">
            <p>Following</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
