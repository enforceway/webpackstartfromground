const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
function resolve(dirName) {
  return path.resolve(__dirname, dirName);
}
module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    // filename: 'bundle.js',
    // filename: '[name]-[hash].js',
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: '02example template',
    // filename: '[name].html',
    // filename: "[hash].html",
    // filename: "[chunkhash].html",
    filename: 'index.html',
    template: 'src/index.html'
  })],
}
