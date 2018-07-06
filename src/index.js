import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app';
import store, { history } from './store.js';

ReactDOM.render(
    <Root store={store} history={history} />, 
    document.getElementById('index')
);