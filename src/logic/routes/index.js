import Pages from 'view/pages';

import Paths from './paths';

const Broken = {
  element: Pages.neutral.Broken,
  path: Paths.neutral.BROKEN_PATH,
};

const Admin = {
  element: Pages.private.Admin,
  path: Paths.private.ADMIN_PATH,
};

const Home = {
  element: Pages.public.Home,
  path: Paths.public.HOME_PATH,
};

const neutralRoutes = [Broken];
const privateRoutes = [Admin];
const publicRoutes = [Home];

export { neutralRoutes, privateRoutes, publicRoutes };
