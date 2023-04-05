import { createActions, createReducer } from 'reduxsauce';

import { updateProp, updateProps } from 'logic/helpers';

export const { Types, Creators } = createActions(
  {
    persisted: null,
    updateProps: ['props'],
    updateProp: ['key', 'payload'],
    generalFail: ['errors'],
  },
  { prefix: 'application/' },
);

const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.UPDATE_PROP]: updateProp,
});
