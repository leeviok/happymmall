/*
 * @Author: leevi 
 * @Date: 2018-04-24 14:43:16 
 * @Last Modified by: leevi
 * @Last Modified time: 2018-04-24 16:35:06
 */
var path = require('path');
var webpack = require('webpack')
let config = {
  mode: 'production',
  entry: {
    'index': ['./src/page/index/index.js'],
    'login': ['./src/page/login/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  externals: {
    'jquery': 'window.jQuery'
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'js/base.js'
    // })
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      filename: 'js/base.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

module.exports = config;