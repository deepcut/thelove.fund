const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const definePlugin = new webpack.DefinePlugin({
  __DEVELOPMENT__: JSON.stringify(JSON.parse(process.env.BUILD_DEVELOPMENT || false)),
  __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || false))
});

module.exports = {
  entry: {
    all: './source/assets/javascripts/all.js'
  },
  output: {
    path: __dirname + '/.tmp/dist/assets',
    filename: 'javascripts/[name].js',
  },
  module: {
    rules: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|bower_components|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
      },
      {
        test: /source\/assets\/stylesheets\/all.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('stylesheets/all.css')
  ]
};

