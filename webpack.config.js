const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
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
  ],
};
