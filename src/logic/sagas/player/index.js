import { put } from 'redux-saga/effects';

import Api from 'logic/api';
import player from 'logic/repositories';
import { Types as PlayerTypes } from 'logic/reducers/player';
import { Types as ApplicationTypes } from 'logic/reducers/application';

export const getPlayers = function* () {
  yield put({
    type: Api.API_CALL,
    actions: {
      fail: { type: ApplicationTypes.GENERAL_FAIL },
      success: { type: PlayerTypes.GET_PLAYERS_SUCCES },
    },
    promise: player.getPlayers(),
  });
};

export const getPlayersSucces = function* ({ payload }) {
  yield put({ type: PlayerTypes.UPDATE_PROPS, props: { players: payload } });
};
