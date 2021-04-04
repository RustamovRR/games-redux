import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
  <App />
  , document.getElementById('root')
)
