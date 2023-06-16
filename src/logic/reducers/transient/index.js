import { createActions, createReducer } from 'reduxsauce';

import { updateProps } from 'logic/helpers';

export const { Creators, Types } = createActions(
  {
    updateProps: ['props'],
  },
  { prefix: 'transient/' },
);

const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
});
