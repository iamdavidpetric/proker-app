const updateProps = (state, { props }) => ({ ...state, ...props });
const updateProp = (state, key, payload) => ({ ...state, [key]: payload });

export { updateProps, updateProp };
