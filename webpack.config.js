/*
 * @Author: leevi 
 * @Date: 2018-04-24 14:43:16 
 * @Last Modified by: leevi
 * @Last Modified time: 2018-04-25 17:47:15
 */
var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var getHtmlConfig = function (name) {
  return {
    template: './src/view/'+ name +'.html',
    filename: 'view/'+ name +'.html',
    inject: true,
    hash: true,
    chunks: [name]
  }
}
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
    /* new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'js/base.js'
    }) */
    // html模板的处理
    new HtmlWebpackPlugin(getHtmlConfig('index'))
  ],
  module: {
    rules: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};

module.exports = config;