// @ts-check

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {Partial<import('ts-loader').Options>}
 */
const tsLoaderOptions = {
  onlyCompileBundledFiles: true,
  transpileOnly: true
};

/**
 * @type {import('webpack').Configuration}
 */
const appConfig = {
  entry: './src/app/index.tsx',
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, 'dist/app'),
    publicPath: '/app'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../app.html',
      title: 'mywebapp',
      template: 'src/app/index.html'
    })
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, use: {loader: 'ts-loader', options: tsLoaderOptions}}
    ]
  },
  resolve: {extensions: ['.js', '.json', '.ts', '.tsx']}
};

module.exports = [appConfig];
