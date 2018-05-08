const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    polyfills: '@babel/polyfill',
    app: resolve(__dirname, 'demo/src/app.js')
  },
  output: {
    filename: 'scripts/[name].js',
    path: resolve(__dirname, 'demo/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      // copy webcomponentsjs polyfills we need to load in production
      {
        from: resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*.js'),
        to: './scripts/wc',
        flatten: true
      }
    ])
  ]
};
