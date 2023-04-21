import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Navigation } from '../Navigation/Navigation';

import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
