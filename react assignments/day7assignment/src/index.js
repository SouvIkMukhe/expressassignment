// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import BankApp from './components/BankApp';

ReactDOM.render(
  <Provider store={store}>
    <BankApp />
  </Provider>,
  document.getElementById('root')
);
