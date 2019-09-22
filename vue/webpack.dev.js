const merge = require('webpack-merge');
const baseCfg = require('./webpack.config');

const dev = {
  mode: 'development',
  devServer: {
    port: 8080,
    watchContentBase: true,
    progress: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = merge(baseCfg, dev);
