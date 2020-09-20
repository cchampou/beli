const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.common.config');

module.exports = {
  ...commonConfig,
  mode: 'production',
  entry: path.resolve('src/index.jsx'),
};
