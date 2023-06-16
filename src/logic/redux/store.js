import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import sagas from '../sagas';
import apiMiddleware from './apiMiddleware';
import rootReducer, { history } from './rootReducer';

const loggerOptions = {
  collapsed: (_getState, _action, logEntry) => !logEntry.error,
  diff: true,
};

const routerMiddleware = createRouterMiddleware(history);

const loggerMiddleware = createLogger(loggerOptions);

const sagaMiddleware = createSagaMiddleware();

let middlewares = [apiMiddleware, sagaMiddleware, routerMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store, {}, () => {});

sagaMiddleware.run(sagas);

const reduxStore = () => ({ store, persistor });

export default reduxStore;
