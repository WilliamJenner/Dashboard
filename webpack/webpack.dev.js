const path = require("path");

module.exports = (__dirname) => {
  return {
    devServer: {
      contentBase: path.join(__dirname, "wwwroot/dist"),
      publicPath: "/dev/",
      port: 4000,
      historyApiFallback: true,
      hot: true,
      watchContentBase: true,
      headers: {
        "Access-Control-Allow-Origin": "https://localhost:44370",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  };
};
