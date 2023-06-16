import { takeLatest } from 'redux-saga/effects';
import { Types as ApplicationTypes } from 'logic/reducers/application';

import { hydrated, generalFail } from '.';

const applicationSagas = [
  takeLatest(ApplicationTypes.HYDRATED, hydrated),
  takeLatest(ApplicationTypes.GENERAL_FAIL, generalFail),
];

export default applicationSagas;
