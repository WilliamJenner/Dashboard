const path = require("path");
const appRoot = require("app-root-path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");

const commonHtmlWebpackPluginConfig = () => {
  return {
    inject: true,
    minify: false,
  };
};

module.exports = (__dirname, env) => {
  return {
    // Enable sourcemaps for debugging webpack's output.
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      mainFields: ["main", "module", "browser"],
    },
    entry: __dirname + "/src/scripts/index.tsx",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              happyPackMode: true
            }
          },
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },

        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    output: {
      filename: "app.bundle.js",
      path: __dirname + "/wwwroot/dist/",
      publicPath: "/",
    },
    plugins: [
      new HtmlWebPackPlugin({
        ...commonHtmlWebpackPluginConfig(),
        title: "Index",
        template: path.join(
          `${appRoot}`,
          "Views",
          "Templates",
          "_App_Template.cshtml"
        ),
        filename: path.join(`${appRoot}`, "Views", "Home", "Index.cshtml"),
        chunks: ["dist/app.bundle.js"],
        devServer: env.development !== undefined,
      }),
      new HtmlWebPackPlugin({
        ...commonHtmlWebpackPluginConfig(),
        title: "Layout",
        template: path.join(
          `${appRoot}`,
          "Views",
          "Templates",
          "_Layout_Template.cshtml"
        ),
        filename: path.join(`${appRoot}`, "Views", "Shared", "_Layout.cshtml"),
        chunks: ["dist/vendor.bundle.js"],
      }),
      new HappyPack({
        id: "ts",
        threads: 4,
        loaders: ["ts-loader"],
      }),
      new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true,

      }),
      new webpack.DefinePlugin({
        global: {},
      }),
    ],
  };
};
