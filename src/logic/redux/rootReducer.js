import { createActions } from 'reduxsauce';
import { createBrowserHistory } from 'history';
import { persistCombineReducers } from 'redux-persist';
import { createRouterReducer } from '@lagunovsky/redux-react-router';

import reducers from 'logic/reducers';

import { storeConfig } from './config';

export const history = createBrowserHistory();

export const { Types } = createActions(
  {
    reset: null,
  },
  { prefix: 'state/' },
);

const appReducers = persistCombineReducers(storeConfig, {
  ...reducers,
  router: createRouterReducer(history),
});

const rootReducer = (state, action) => {
  if (action && action.type === Types.RESET) {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducer;
