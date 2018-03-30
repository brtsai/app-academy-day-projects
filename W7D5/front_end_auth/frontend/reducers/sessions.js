import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session';

import {
  merge
} from 'lodash';

const nullSession = {
  currentUser: null
};

export default (state = nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.user});

    case LOGOUT_CURRENT_USER:
      return nullSession;

    default:
      return state;
  }

}








