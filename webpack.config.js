const webpack = require('webpack');
const HtmlGeneratorWebpack = require('html-webpack-plugin');

const path = require('path');


module.exports = {
  
  devtool: 'inline-source-map',

  entry: ['./app/driver.js'],

  module: {
    rules: [{
      test: /\.hbs$/,
      loader: "handlebars-loader"
    }, {
      test: /\.es6$/,
      loader: 'babel-loader',
      include: /app/
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }, {
      test: /\.coffee$/,
      loader: "coffee-loader"
    }]
  },

  // output: {
  //   path: path.join(__dirname, 'build'),
  //   filename: 'app.js',
  //   publicPath: '/'
  // },

  plugins: [
    new HtmlGeneratorWebpack({
      hash: true,
      template: './app/tmpl/index.hbs'
    }),
    new webpack.ProvidePlugin({
      '_time': 'moment',
      '_money': 'accounting',
      '_promise': 'bluebird',
      '$': 'jquery',
      '_': 'lodash',
      'Bb': 'backbone',
      'Mn': 'backbone.marionette'
    }),
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js'],
    alias: {
      'underscore': 'lodash'
    }
  }
}