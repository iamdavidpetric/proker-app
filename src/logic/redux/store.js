import apiMiddleware from './apiMiddleware';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { legacy_createStore, applyMiddleware } from 'redux';

import sagas from '../sagas';
import rootReducer from './rootReducer';

const loggerMiddleware = createLogger({
  collapsed: (_getState, _action, logEntry) => !logEntry.error,
  diff: true,
});
const sagaMiddleware = createSagaMiddleware();

let middlewares = [apiMiddleware, sagaMiddleware];
middlewares.push(loggerMiddleware);

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store, {}, () => {});

sagaMiddleware.run(sagas);
const reduxStore = () => ({ store, persistor });

export default reduxStore;
