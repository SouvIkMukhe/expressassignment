// src/store.js

import { createStore } from 'redux';
import bankReducer from './reducer';

const store = createStore(bankReducer);

export default store;
