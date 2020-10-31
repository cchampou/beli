const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const commonConfig = require('./webpack.common.config');

module.exports = {
  ...commonConfig,
  mode: 'production',
  entry: path.resolve('src/index.jsx'),
  plugins: [
    ...commonConfig.plugins,
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new SitemapPlugin('https://beli.cchampou.me', [
      '/',
      '/about',
      '/contact',
      '/shop',
      '/youtube',
    ]),
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
  },
};
