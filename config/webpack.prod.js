const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(commonConfig, {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {      
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/dist'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project',
            template: path.resolve(__dirname, '../src/index.html'),
            hash: true,
            minify: {
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
      })
    ]
});