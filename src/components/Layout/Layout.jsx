import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Navigation } from '../Navigation/Navigation';

import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Navigation />
        </div>
      </header>

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <div className={styles.container}>
            <Outlet />
          </div>
        </Suspense>
      </main>
    </>
  );
};
