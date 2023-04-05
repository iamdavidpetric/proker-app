import Api from 'logic/api';
import { Player } from 'logic/repositories';

import { put } from 'redux-saga/effects';

import { Types as PlayerTypes } from 'logic/reducers/player';
import { Types as ApplicationTypes } from 'logic/reducers/application';

export const getPlayers = function* () {
  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: PlayerTypes.GET_PLAYERS_SUCCES },
      fail: { type: ApplicationTypes.GENERAL_FAIL },
    },
    promise: Player.getPlayers(),
  });
};

export const getPlayersSucces = function* ({ payload }) {
  yield put({
    type: PlayerTypes.UPDATE_PROPS,
    props: { players: payload },
  });
};
