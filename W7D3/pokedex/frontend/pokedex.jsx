import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//for testing
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON, requestAllPokemon } from './actions/pokemon_actions';
import selectAllPokemon from './reducers/selectors';

//TODO: remove stuff set on window used for testing

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(<Root store={store}/>, root);
});
