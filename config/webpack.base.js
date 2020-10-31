/* eslint-disable */
require('dotenv').config()
const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { VueLoaderPlugin } = require('vue-loader')
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
//
// const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    main: './src/main.ts',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },

  stats: 'none',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      vue: '@vue/runtime-dom',
    },
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpack({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin()
  ],
}
