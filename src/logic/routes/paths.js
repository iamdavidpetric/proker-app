const HOME_PATH = '/';
const BROKEN_PATH = '/404';
const ADMIN_PATH = '/admin';

const publicPaths = {
  DEFAULT_PATH: HOME_PATH,
  HOME_PATH,
};

const privatePaths = {
  ADMIN_PATH,
  DEFAULT_PATH: ADMIN_PATH,
};

const neutralPaths = {
  BROKEN_PATH,
  DEFAULT_PATH: BROKEN_PATH,
};

// eslint-disable-next-line
export default { public: publicPaths, private: privatePaths, neutral: neutralPaths };
