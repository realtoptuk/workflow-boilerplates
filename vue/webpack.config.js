const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function rootFolder(args) {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(path, [path.resolve(__dirname, '..')].concat(args));
}

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      vue$:
        process.env.NODE_ENV === 'development'
          ? 'vue/dist/vue.runtime.js'
          : 'vue/dist/vue.runtime.min.js',
      '@': rootFolder('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader',
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = config;
