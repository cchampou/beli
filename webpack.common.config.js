const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
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
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/favicon.ico' },
        { from: 'public/robots.txt' },
        { from: 'public/manifest.json' },
        { from: 'public/40.png' },
        { from: 'public/60.png' },
        { from: 'public/120.png' },
        { from: 'public/180.png' },
      ],
    }),
  ],
};
