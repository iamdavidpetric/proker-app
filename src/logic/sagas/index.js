import { all } from 'redux-saga/effects';

import playerSagas from './player/watchers';
import applicationSagas from './application/watchers';

export default function* root() {
  yield all([...applicationSagas, ...playerSagas]);
}
