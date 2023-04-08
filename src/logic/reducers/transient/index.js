import { updateProps } from 'logic/helpers';
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
  },
  { prefix: 'transient/' },
);

const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
});
