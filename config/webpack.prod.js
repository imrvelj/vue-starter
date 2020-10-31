/* eslint-disable */
require('dotenv').config()
const path = require('path')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
// const WorkboxPlugin = require('workbox-webpack-plugin')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',

  output: {
    filename: '[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtract.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtract.loader,
          },
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          warnings: false,
        },
      }),
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtract({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    // new WorkboxPlugin.GenerateSW({
    //   swDest: 'sw.js',
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   runtimeCaching: [
    //     { urlPattern: new RegExp('/'), handler: 'StaleWhileRevalidate' },
    //   ],
    // }),
  ],
})
