const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //    presets: ['@babel/preset-env']
          // }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img/", to: "assets/img/" },
        { from: "src/assets/audio/", to: "assets/audio/" },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'English for Kids',
      favicon: 'src/favicon.ico'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({ filename: 'index.html', template: 'src/index.html'}),
  ],
};
