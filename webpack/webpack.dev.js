const path = require('path');


module.exports = (__dirname) => {
    return {
        devServer: {
            contentBase: path.join(__dirname, './wwwroot/dist/app.bundle.js'),
            historyApiFallback: true,
            compress: true,
            hot: true,
            port: 4000,
            writeToDisk: true,
        },
    }
}