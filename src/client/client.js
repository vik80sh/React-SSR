// Startup point for the client side application

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import  Routes from './Routes';

import Home from './component/Home';

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>, document.querySelector('#root'));