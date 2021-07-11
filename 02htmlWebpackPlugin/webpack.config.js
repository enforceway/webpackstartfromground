const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
function resolve(dirName) {
  return path.resolve(__dirname, dirName);
}
module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // filename: '[name]-[hash].js',
    // filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Custom template',
    filename: 'index.html',
    // filename: 'admin.html',
    template: 'src/index.html'
  })],
}
