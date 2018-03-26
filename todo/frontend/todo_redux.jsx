import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

const Root = function () {return <h1>Hi mom</h1>;};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
