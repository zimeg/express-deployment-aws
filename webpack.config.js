const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './lambda.js',
  target: 'node',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new Dotenv({ path: './backend/.env' }),
  ],
};
