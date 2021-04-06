import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App.jsx';
import rootReducer from './redux/reducers/index.js';

const composeEnhancer = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')
)
