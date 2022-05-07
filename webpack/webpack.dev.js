const killPort = require("kill-port");
const config = require("./config");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const webpackCommon = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = async ({ dev_server }) => {
  dev_server = dev_server === "true";

  if (dev_server) await killPort(config.devServerPort);

  return merge(webpackCommon, {
    mode: "development",
    plugins: [
      !dev_server && new CleanWebpackPlugin({ ...config.cleanWebpackOptions }),
      dev_server && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackHarddiskPlugin(),
      new HtmlWebpackPlugin({
        ...config.commonHtmlWebpackPlugin,
        title: "DEV - Wallboard",
        devServer: dev_server
         ? `${config.devServerUrl}:${config.devServerPort}/`
         : false,
        alwaysWriteToDisk: true,
        verbose: true,
      }),
    ].filter(Boolean),
    devtool: "inline-source-map",
    stats: {
      errorDetails: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/i,
          use: [
            // Creates `style` nodes from JS strings
            { loader: "style-loader" },
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
              plugins: [
                dev_server && require.resolve("react-refresh/babel"),
              ].filter(Boolean)
            },
          },
        },
      ],
    },
    devServer: {
      static: {
        directory: config.distPath,
      },
      allowedHosts: "all",
      compress: true,
      server: "https",
      hot: true,
      port: config.devServerPort,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
    output: {
      path: config.distPath,
      filename: "js/[name].bundle.js",
      publicPath: dev_server
        ? `${config.devServerUrl}:${config.devServerPort}/`
        : "/",
    },
  });
};
