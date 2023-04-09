import { createActions, createReducer } from 'reduxsauce';

import { updateProps, updateProp } from 'logic/helpers';

export const { Creators, Types } = createActions(
  {
    updateProp: ['key', 'payload'],
    updateProps: ['props'],

    getPlayers: null,
    getPlayersSucces: ['payload'],
  },
  { prefix: 'player/' },
);

export const initialState = { players: [] };

export default createReducer(initialState, {
  [Types.UPDATE_PROP]: updateProp,
  [Types.UPDATE_PROPS]: updateProps,
});
