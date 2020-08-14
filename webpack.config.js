const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve('src/index.jsx'),
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html',
  })],
  module: {
    rules: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
      },
    ],
  },
};
