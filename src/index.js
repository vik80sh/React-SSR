
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/component/Home').default;
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
const app = express();

app.use(express.static('public'));
app.get('*',(req,res) => {
    const store = createStore();

    // some logicss
    res.send(renderer(req));
})

app.listen(3000 , ()=>{
    console.log("Listing at prot number :3000")
})