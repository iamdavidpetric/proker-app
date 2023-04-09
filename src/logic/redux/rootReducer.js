import { createActions } from 'reduxsauce';
import { persistCombineReducers } from 'redux-persist';

import reducers from 'logic/reducers';

import { storeConfig } from './config';

export const { Types } = createActions(
  {
    reset: null,
  },
  { prefix: 'state/' },
);

const appReducers = persistCombineReducers(storeConfig, {
  ...reducers,
});

const rootReducer = (state, action) => {
  if (action && action.type === 'state/RESET') {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducer;
