const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src/components'),
            'node_modules'
        ],
        alias: {
            images: path.join(__dirname, '../src/assets/images')
        },
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            }
        ]
    },
    plugins: []
};