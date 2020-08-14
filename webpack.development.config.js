const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('src/index.jsx'),
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html',
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 9000,
    overlay: true,
    hot: true,
    quiet: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png)$/, exclude: /node_modules/, loader: 'file-loader',
      },
    ],
  },
};
