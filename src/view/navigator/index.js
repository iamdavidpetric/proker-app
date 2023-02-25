import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '../../logic/routes/index';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(route => (
          <Route path={route?.path} element={route?.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
