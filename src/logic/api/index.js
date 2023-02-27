import axios from 'axios';

const defaultConfig = {
  baseUrl: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH_PREFIX}`,
  timeout: 10_000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const api = axios.create(defaultConfig);

const ownInterseptors = {
  handleRequestError: error => {
    return Promise.reject(error);
  },
  handleResponseError: error => {
    return Promise.reject(error);
  },
  handleResponse: response => {
    return response;
  },
  handleRequest: config => {
    return config;
  },
};

api.interceptors.request.use(ownInterseptors.handleRequest, ownInterseptors.handleRequestError);

api.interceptors.response.use(ownInterseptors.handleResponse, ownInterseptors.handleResponseError);

const Api = {
  API_CALL: 'API_CALL',

  catchError: error => {
    return error.response.data;
  },

  delete: path => {
    const request = api.delete(path);
    request.catch(Api.catchError);
    return request;
  },

  get: path => {
    const request = api.get(path);
    request.catch(Api.catchError);
    return request;
  },

  patch: (path, body) => {
    const request = api.patch(path, body);
    request.catch(Api.catchError);
    return request;
  },

  post: (path, body) => {
    const request = api.post(path, body);
    request.catch(Api.catchError);
    return request;
  },

  put: (path, body) => {
    const request = api.put(path, body);
    request.catch(Api.catchError);
    return request;
  },

  setHeaders: headers => {
    api.defaults.headers.common = headers;
  },
};

export default Api;
