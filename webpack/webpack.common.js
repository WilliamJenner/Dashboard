const path = require('path');
const appRoot = require('app-root-path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const commonHtmlWebpackPluginConfig = () => {
    return {
        inject: true,
        minify: false,
    }
}

module.exports = (__dirname) => {
    return {
        // Enable sourcemaps for debugging webpack's output.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            mainFields: ['main', 'module', 'browser'],
        },
        entry: __dirname + "/src/scripts/index.tsx",
        target: 'electron-renderer',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.(tsx|ts)?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader"
                    }
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },

                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ]
        },
        output: {
            path: __dirname + "./wwwroot/dist",
            filename: "app.bundle.js"
        },
        plugins: [
            new HtmlWebPackPlugin({
                ...commonHtmlWebpackPluginConfig(),
                title: "Index",
                template: path.join(`${appRoot}`, "Views", "Templates", "_App_Template.cshtml"),
                filename: path.join(`${appRoot}`, "Views", "Home", "Index.cshtml"),
                chunks: ["dist/app.bundle.js"],
            }),
            new HtmlWebPackPlugin({
                ...commonHtmlWebpackPluginConfig(),
                title: "Layout",
                template: path.join(`${appRoot}`, "Views", "Templates", "_Layout_Template.cshtml"),
                filename: path.join(`${appRoot}`, "Views", "Shared", "_Layout.cshtml"),
                chunks: ["dist/vendor.bundle.js"],

            }),
            new HappyPack({
                id: "ts",
                threads: 4,
                loaders: ['ts-loader']
            }),
            new ForkTsCheckerWebpackPlugin({
                checkSyntacticErrors: true,
            }),

        ]
    }
}