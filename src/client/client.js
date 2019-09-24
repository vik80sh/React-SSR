// Startup point for the client side application

import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import reducer from './reducers'

const store = createStore(reducer, {}, applyMiddleware(thunk))
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);