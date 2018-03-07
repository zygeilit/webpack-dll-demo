const webpack = require('webpack');
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
  },
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'),
    }),
    new WebpackShellPlugin({
      onBuildStart:[
        'echo "Webpack Start"',
        'git clone git@github.com:BeisenUX/shared-common-cmps.git'
      ],
      onBuildEnd:['echo "Webpack End"']
    })
  ],
};