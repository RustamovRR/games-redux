import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './GlobalState';
import './index.css';
import reducer, { initialState } from './reducer';


ReactDOM.render(
  <Provider initialState={initialState} reducer={reducer}>
    <App />
  </Provider>
  , document.getElementById('root')
)
