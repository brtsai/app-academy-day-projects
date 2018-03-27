import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  window.allTodos = allTodos;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore()} />, root);
});
