import { updateProps, updateProp } from 'logic/helpers';
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
    updateProp: ['key', 'payload'],

    getPlayers: null,
    getPlayersSucces: ['payload'],
  },
  { prefix: 'player/' },
);

export const initialState = { players: [] };

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.UPDATE_PROP]: updateProp,
});
