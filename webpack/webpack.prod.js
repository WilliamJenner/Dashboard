const config = require("./config");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DefinePlugin = webpack.DefinePlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpackCommon = require("./webpack.common.js");

module.exports = merge(webpackCommon, {
  mode: "production",
  plugins: [
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].min.css",
    }),
    new CleanWebpackPlugin({
      ...config.cleanWebpackOptions,
    }),
    new HtmlWebpackPlugin({
      ...config.commonHtmlWebpackPlugin,
      title: "Wallboard",
    }),
  ],
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: false,
        defaultVendors: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks(chunk) {
            return chunk.name === "vendors";
          },
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            console.log(packageName);
            // npm package names are URL-safe, but some servers don't like @ symbols
            return packageName.replace("@", "");
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
          {
            loader: "postcss-loader",
          },
          // Compiles Sass to CSS
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  output: {
    path: config.distPath,
    filename: "js/[name].[contenthash:8].js",
    publicPath: config.siteRoot,
  },
});
