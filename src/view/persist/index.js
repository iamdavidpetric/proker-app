import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import Application from 'view/application';
import generateStore from 'logic/redux/store';
import { history } from 'logic/redux/rootReducer';

const { store, persistor } = generateStore();

const Persist = () => (
  <Provider store={store}>
    <ReduxRouter history={history}>
      <PersistGate persistor={persistor}>
        <Application />
      </PersistGate>
    </ReduxRouter>
  </Provider>
);

export default Persist;
