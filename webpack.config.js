const webpack = require('webpack');
const HtmlGeneratorWebpack = require('html-webpack-plugin');

const path = require('path');


const isProd = process.env['NODE_ENV'] == 'production';
let sourcemaps;

let pluginsSet = [
  new HtmlGeneratorWebpack({
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
  new webpack.optimize.CommonsChunkPlugin({
    names: ['babelpolyfill', 'vendor'],
    minChunks: Infinity,
    filename: '[name].js'
  })
];

if (isProd) {

  pluginsSet = pluginsSet.concat(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true
    })
  );

} else {

  sourcemaps = 'inline-source-map';

}

module.exports = {
  
  devtool: sourcemaps,

  entry: {
    app: ['./app/driver.js'],
    vendor: ['jquery', 'lodash', 'bluebird', 'moment', 'accounting', 'backbone', 'backbone.marionette'],
    babelpolyfill: ['babel-polyfill']
  },

  module: {
    rules: [{
      test: /\.hbs$/,
      loader: "handlebars-loader"
    }, {
      test: /\.es6$/,
      loader: 'babel-loader',
      include: /app/,
      query: {
        presets: ["es2015", "stage-0"]
      }
    }, {
      test: /\.tsx?$/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0', 'awesome-typescript-loader']
    }, {
      test: /\.coffee$/,
      loader: "coffee-loader"
    }]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/'
  },

  plugins: pluginsSet,

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