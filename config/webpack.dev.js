/* eslint-disable */
require('dotenv').config()
const merge = require('webpack-merge')
const base = require('./webpack.base')

const { PORT = 8080 } = process.env

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,
    inline: true,
    port: PORT,
    historyApiFallback: true,
    clientLogLevel: 'silent',
    stats: 'none',
    noInfo: true,
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  }
})
