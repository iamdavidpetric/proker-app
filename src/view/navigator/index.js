import PropTypes from 'prop-types';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Paths from '../../logic/routes/paths';
import { publicRoutes, neutralRoutes, privateRoutes } from '../../logic/routes';

const renderRoute = (isLoggedIn, type, route) => {
  const redirectTo = isLoggedIn ? Paths.private.DEFAULT_PATH : Paths.public.DEFAULT_PATH;
  const shouldRedirect = (type === 'private' && !isLoggedIn) || (type === 'public' && isLoggedIn);

  return (
    <Route
      path={route?.path}
      element={shouldRedirect ? <Navigate to={redirectTo} replace={true} /> : <route.element />}
      key={route}
    />
  );
};

const Navigator = ({ isLoggedIn = false }) => (
  <BrowserRouter>
    <Routes>
      {publicRoutes.map(renderRoute.bind(null, isLoggedIn, 'public'))}
      {privateRoutes.map(renderRoute.bind(null, isLoggedIn, 'private'))}
      {neutralRoutes.map(renderRoute.bind(null, isLoggedIn, 'neutral'))}
    </Routes>
  </BrowserRouter>
);

Navigator.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Navigator;
