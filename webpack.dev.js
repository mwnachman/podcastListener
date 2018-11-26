const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build/' + process.env.NODE_ENV,
    historyApiFallback: true,
    hot: true
  }
})
