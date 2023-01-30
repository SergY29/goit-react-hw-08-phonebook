import { Outlet } from 'react-router-dom';
import { AppBarHeader } from 'components/AppBarHeader';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
