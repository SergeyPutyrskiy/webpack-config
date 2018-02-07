const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use : [{
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }]
              },
              {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: [{
                  loader: 'url-loader',
                  options: {
                    limit: 100000
                  }
                }]
              },
              {
                test: /\.json$/,
                loader: 'json-loader'
              }
        ]
    },
    plugins: []
};