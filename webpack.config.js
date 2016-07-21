var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'browser-bundle.js',
    path: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    title: '#when-will-i-be-a-dad',
    template: './src/index.html',
    inject: 'body',
  })],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
