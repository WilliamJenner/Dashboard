const path = require("path");
const process = require("process")
const appRoot = require("app-root-path");

module.exports = {
  devServerPort: 8080,

  app: "./src/scripts/app/index.tsx",

  faviconPath: "./src/icons/favicon/*",

  vendors: [
    "react",
    "react-dom",
    "bootstrap",
    "react-router-dom",
    "react-feather",
    "dayjs",
  ],

  distPath: path.resolve(appRoot.toString(), "wwwroot"),

  devServerUrl: "https://localhost",

  siteRoot: "/",

  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],

  cleanWebpackOptions: {
    cleanOnceBeforeBuildPatterns: ["**/*", path.join(process.cwd(), 'Views', "Shared", "_Layout.cshtml")],
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
