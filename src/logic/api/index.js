import axios from 'axios';

const defaultConfig = {
  baseUrl: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH_PREFIX}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const api = axios.create(defaultConfig);

const ownInterceptors = {
  handleRequestError: error => {
    return Promise.reject(error);
  },
  handleResponseError: error => {
    return Promise.reject(error);
  },
  handleResponse: config => {
    return config;
  },
  handleRequest: config => {
    return config;
  },
};

api.interceptors.request.use(ownInterceptors.handleRequest, ownInterceptors.handleRequestError);

api.interceptors.response.use(ownInterceptors.handleResponse, ownInterceptors.handleResponseError);

const Api = {
  API_CALL: 'API_CALL',

  catchError: error => {
    return error.response.data;
  },

  delete: (path, config = defaultConfig) => {
    const request = api.delete(path, config);
    request.catch(Api.catchError);
    return request;
  },

  get: (path, config = defaultConfig) => {
    const request = api.get(path, config);
    request.catch(Api.catchError);
    return request;
  },

  patch: (path, body, config = defaultConfig) => {
    const request = api.patch(path, body, config);
    request.catch(Api.catchError);
    return request;
  },

  post: (path, body, config = defaultConfig) => {
    const request = api.post(path, body, config);
    request.catch(Api.catchError);
    return request;
  },

  put: (path, body, config = defaultConfig) => {
    const request = api.put(path, body, config);
    request.catch(Api.catchError);
    return request;
  },

  setHeaders: headers => {
    api.defaults.headers.common = headers;
  },
};

export default Api;
