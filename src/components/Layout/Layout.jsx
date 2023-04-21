import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
