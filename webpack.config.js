const HtmlGeneratorWebpack = require('html-webpack-plugin');

module.exports = {

  entry: './app/driver.js',

  plugins: [
    new HtmlGeneratorWebpack({hash: true})
  ]
}