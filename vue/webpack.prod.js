const merge = require('webpack-merge');
const baseCfg = require('./webpack.config');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const bundleAnalizerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

process.env.BABEL_ENV = 'production';

const prod = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[id].[chunkhash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.[hash:8].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        collapseWhitespace: true,
        useShortDoctype: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new bundleAnalizerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = merge(baseCfg, prod);
