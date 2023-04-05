export const persisted = function* () {};
// eslint-disable-next-line
export const generalFail = function* ({ errors = [] }) {
  console.log('hopa, avem eroare', { errors });
};
