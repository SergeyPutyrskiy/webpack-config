const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {      
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        hot: true,
        port: 3001,
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/dist'
                }),
            },
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project',
            template: path.resolve(__dirname, '../src/index.html'),
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: false,
            allChunks: true
        }),
    ]
};