const path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    modules: [path.resolve('./lib'), path.resolve('./node_modules')]
  },
  entry: {
    vendor: [
      'babel-polyfill',
    ],
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/, /routes/, /views/, /app.js/],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2', 'stage-3']
        }
      }
    }]
  },
  node: {
    fs: "empty",
    net: "empty"
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ]
  };

module.exports = config;
