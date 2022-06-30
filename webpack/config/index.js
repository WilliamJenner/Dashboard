const path = require("path");
const process = require("process");
const appRoot = require("app-root-path");

module.exports = {
  devServerPort: 8080,

  app: { import: "./src/scripts/app/index.tsx", dependOn: "vendors" },

  faviconPath: "./src/icons/favicon/*",

  vendors: [
    "react",
    "react-dom",
    "bootstrap",
    "react-router-dom",
    "react-feather",
    "dayjs",
    "@microsoft/signalr",
    "react-bootstrap"
  ],

  distPath: path.resolve(appRoot.toString(), "wwwroot"),

  devServerUrl: "https://localhost",

  siteRoot: "/",

  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],

  cleanWebpackOptions: {
    cleanOnceBeforeBuildPatterns: ["js/**/*", "css/**/*"],
    verbose: true,
  },

  commonHtmlWebpackPlugin: {
    filename: path.join(`${appRoot}`, "Views", "Shared", "_Layout.cshtml"),
    template: path.join(
      `${appRoot}`,
      "Views",
      "Templates",
      "_Layout_Template.cshtml"
    ),
    inject: false,
    minify: false,
  },
};
