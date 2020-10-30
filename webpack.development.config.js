const path = require('path');
const commonConfig = require('./webpack.common.config');

module.exports = {
  ...commonConfig,
  mode: 'development',
  entry: path.resolve('src/index.jsx'),
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 9000,
    overlay: true,
    hot: true,
    quiet: true,
    historyApiFallback: true,
  },
};
