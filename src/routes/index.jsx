import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loading } from '@components/templates/Loader';

import routes from '@routes/routes';

import PrivateRoute from './PrivateRoute';

export default function RootRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PrivateRoute isAuthenticated={route.private} element={route.element} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
