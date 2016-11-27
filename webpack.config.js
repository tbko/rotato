const HtmlGeneratorWebpack = require('html-webpack-plugin');

module.exports = {

  entry: './app/driver.js',

  module: {
    rules: [{
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

  plugins: [
    new HtmlGeneratorWebpack({hash: true})
  ]
}