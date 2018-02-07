const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, '../src/assets'),
            'node_modules'
        ],
        alias: {
            components: path.join(__dirname, '../src/js/components'),
            data: path.join(__dirname, '../src/js/data'),
            Images: path.join(__dirname, '../src/assets/images')
        },
        extensions: ['.js', '.jsx', '.json', '.scss']
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
                    name: 'images/[name].[ext]?[hash]',
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
    plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'vendor',
    //         filename: 'dist/vendor.js',
    //         minChunks: Infinity
    //   })
    ]
};