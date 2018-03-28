const thunk = ({ dispatch, getState }) => next => action => {
  // console.log(`action type: ${typeof action}`);
  // console.log(action);
  if (typeof action === "function") {
    return action(dispatch, getState);
  } else {
    return next(action);
  }
};

export default thunk;
