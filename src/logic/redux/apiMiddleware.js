import Api from 'logic/api';
import { Types as TransientTypes } from 'logic/reducers/transient';

const apiMiddleware = () => next => action => {
  const { type, actions = {}, promise, loadingState, ...rest } = action;

  if (type !== Api.API_CALL) {
    return next(action);
  }

  const { success, fail, load } = actions;

  if (load.key) {
    next({ type: TransientTypes.UPDATE_PROPS, props: { [load.key]: true } });
  }

  return promise
    .then(payload => {
      if (success && success.type) {
        next({ ...rest, payload: payload.data, ...success });
      }
    })
    .catch(error => {
      next({
        ...rest,
        type: fail.type,
        error: { ...error, responseType: Api.NETWORK_ERROR },
        ...fail,
      });
    })
    .finally(() => {
      next({ type: TransientTypes.UPDATE_PROPS, props: { [load.key]: false } });
    });
};

export default apiMiddleware;
