import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import generateStore from '../../logic/redux/store';
import Application from '../../view/application';

const { store, persistor } = generateStore();

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Application />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
};

export { renderApp };
