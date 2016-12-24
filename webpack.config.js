var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/client/');

var config = {
  entry: [
    APP_DIR + '/startup/index.jsx',
    'webpack/hot/dev-server'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
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
