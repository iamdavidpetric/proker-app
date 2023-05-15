import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import sagas from '../sagas';
import rootReducer from './rootReducer';
import apiMiddleware from './apiMiddleware';

const loggerOptions = {
  collapsed: (_getState, _action, logEntry) => !logEntry.error,
  diff: true,
};

const loggerMiddleware = createLogger(loggerOptions);

const sagaMiddleware = createSagaMiddleware();

let middlewares = [apiMiddleware, sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store, {}, () => {});

sagaMiddleware.run(sagas);

const reduxStore = () => ({ store, persistor });

export default reduxStore;
