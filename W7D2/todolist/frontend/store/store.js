import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';

import { fetchTodos } from '../actions/todo_actions';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  window.store = store;
  window.fetchTodos = fetchTodos;
  return store;
};

export default configureStore;
