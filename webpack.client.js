
const path = require('path') ;
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
   

    // tell webpack the root file of our server application
    entry : './src/client/client',

    // tell webpack where to put output file that is generated
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'public')
    },
    externals:[webpackNodeExternals()]
}

module.exports = merge(baseConfig,config)