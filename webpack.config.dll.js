const webpack = require('webpack');
const path = require('path');

const vendors = [
  'react',
  'react-dom',
  'redux'
];

module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
  ],
};
