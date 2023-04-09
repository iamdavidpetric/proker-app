import Api from 'logic/api';

const apiMiddleware = () => {
  return next => action => {
    const { type, actions = {}, promise, ...rest } = action;

    if (type !== Api.API_CALL) {
      return next(action);
    }

    const { success, fail } = actions;

    return promise
      .then(payload => {
        if (success && success.type) {
          next({ ...rest, payload: payload.data, ...success });
        }
      })
      .catch(error => {
        const { type: failType, ...failExtraPayload } = fail;
        if (fail && fail.type) {
          next({
            ...rest,
            type: failType,
            error: { ...error, responseType: Api.NETWORK_ERROR },
            ...failExtraPayload,
          });
        }
      });
  };
};

export default apiMiddleware;
