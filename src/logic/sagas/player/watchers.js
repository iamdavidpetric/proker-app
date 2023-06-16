import { takeLatest } from 'redux-saga/effects';

import { Types as PlayerTypes } from 'logic/reducers/player';

import { getPlayers, getPlayersSucces } from '.';

const playerSagas = [
  takeLatest(PlayerTypes.GET_PLAYERS, getPlayers),
  takeLatest(PlayerTypes.GET_PLAYERS_SUCCES, getPlayersSucces),
];

export default playerSagas;
