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
};
