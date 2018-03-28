import { RECEIVE_TODO, RECEIVE_TODOS, receiveTodo, receiveTodos } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODO:
      const todo = {[action.todo.id]: action.todo};
      const newState = merge({}, state, todo);
      return newState;
    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todosReducer;
