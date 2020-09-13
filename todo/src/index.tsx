import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'tachyons-spacing/css/tachyons-spacing.css';
import 'tachyons-spacing/css/tachyons-spacing.css';
import 'tachyons-flexbox/css/tachyons-base.css';
import 'tachyons-flexbox/css/tachyons-flexbox.css';
import 'material-design-icons/iconfont/material-icons.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();