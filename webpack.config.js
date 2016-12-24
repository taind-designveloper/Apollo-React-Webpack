var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var CLIENT_DIR = path.resolve(__dirname, 'src/client/');
var SERVER_DIR = path.resolve(__dirname, 'src/server/');
var SOURCE_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: {
    bundle: [
      CLIENT_DIR + '/main.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080/'
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: CLIENT_DIR
      },
      {
        test: /[\.jsx|\.js]$/,
        include: SOURCE_DIR,
        loaders: ['react-hot','babel']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: BUILD_DIR,
  }
}

module.exports = config;
