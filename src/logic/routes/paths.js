const BROKEN_PATH = '/404';

const ADMIN_PATH = '/admin';

const HOME_PATH = '/';

const neutralPaths = {
  BROKEN_PATH,
  DEFAULT_PATH: BROKEN_PATH,
};

const privatePaths = {
  ADMIN_PATH,
  DEFAULT_PATH: ADMIN_PATH,
};

const publicPaths = {
  DEFAULT_PATH: HOME_PATH,
  HOME_PATH,
};

// eslint-disable-next-line
export default { neutral: neutralPaths, private: privatePaths, public: publicPaths };
