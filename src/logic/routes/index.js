import Pages from '../../view/pages';
import Paths from './paths';

const Home = {
  element: Pages.Home,
  path: Paths.public.HOME_PATH,
};

const publicRoutes = [Home];

export { publicRoutes };
