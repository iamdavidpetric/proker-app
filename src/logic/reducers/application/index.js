import { createActions, createReducer } from 'reduxsauce';

import { updateProp, updateProps } from 'logic/helpers';

export const { Creators, Types } = createActions(
  {
    updateProp: ['key', 'payload'],
    updateProps: ['props'],

    hydrated: null,
    generalFail: ['errors'],
  },
  { prefix: 'application/' },
);

const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_PROP]: updateProp,
  [Types.UPDATE_PROPS]: updateProps,
});
