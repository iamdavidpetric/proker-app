import Home from './public/Home';

import Admin from './private/Admin';

import Broken from './neutral/Broken';

const neutralPages = { Broken };
const privatePages = { Admin };
const publicPages = { Home };

// eslint-disable-next-line
export default { neutral: neutralPages, private: privatePages, public: publicPages };
