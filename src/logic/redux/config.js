import storage from 'redux-persist/lib/storage';

const storeConfig = {
  key: 'root',
  storage,
  blacklist: [],
  timeout: null,
};

export { storeConfig };
