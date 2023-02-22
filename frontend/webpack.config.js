const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { Configuration } = require('webpack-dev-server')
const env = process.env.NODE_ENV;
const pPath = ("./");
const webfontsPath = ('./webfonts');
const sourceMap = (env === 'production' ? true : false);


module.exports = {
  entry: './src/index.js',

  mode: env,

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].bundle.js',
    clean: true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  module: {
    rules: [
      // js files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // Sass files
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // Bootstrap CSS files
      {
        test: /bootstrap\.css$/,
        use: [
          env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: sourceMap,
            },
          },
        ]
      },



      {
        test: /\.html$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
            options: {
              sources: {
                list: [
                  {
                    tag: 'script',
                    attribute: 'src',
                    type: 'src',
                  },
                  {
                    tag: 'link',
                    attribute: 'href',
                    type: 'src',
                  },
                ],
              },
            },
          },
        ],
      },

    ],
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
      inject:true
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/contact.html',
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/products.html',
      filename: 'products.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/login.html',
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/account.html',
      filename: 'account.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/product_details.html',
      filename: 'product_details.html'
    }),

    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "index.css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'images' }
      ]
    }),

  ]
};
