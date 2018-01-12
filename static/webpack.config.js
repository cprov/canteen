const webpack = require('webpack');

const config = {
  entry:  __dirname + '/js/index.jsx',
  output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
  },
  resolve: {
      extensions: ['.js', '.jsx', '.css']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : __dirname + '/js',
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
