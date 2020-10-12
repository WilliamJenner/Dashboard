const path = require('path');
const webpack = require('webpack');
const appRoot = require('app-root-path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const commonHtmlWebpackPluginConfig = (devServer) => {
    return {
        minify: false,
        inject: true,
        files: {
            css: ["./src/styles/index.scss"]
        },
        dist: devServer ? 'https://localhost:8081' : 'dist',
    }
}

module.exports = (dev_server, dir_name) => {
    return {
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        entry: {
            app: ['./src/scripts/index.tsx'],
        },
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
            plugins: [
                new TsConfigPathsPlugin()
            ]
        },
        output: {
            path: path.resolve(dir_name, 'wwwroot/dist'),
            filename: '[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(tsx|ts)?$/,
                    exclude: /node_modules/,
                    loader: "happypack/loader?id=ts",
                },
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    exclude: '/.node_modules'
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
        devServer: {
            watchContentBase: true,
            contentBase: './dist',
            publicPath: '/dist/',
            port: 8081,
            hot: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type",
            },
        },
        plugins: [
            new HtmlWebPackPlugin({
                ...commonHtmlWebpackPluginConfig(dev_server),
                title: "Index",
                template: path.join(`${appRoot}`, "Views", "Templates", "_App_Template.cshtml"),
                filename: path.join(`${appRoot}`, "Views", "Home", "Index.cshtml"),
                chunks: ["app.bundle.js"],
            }),
            new HtmlWebPackPlugin({
                ...commonHtmlWebpackPluginConfig(dev_server),
                title: "Layout",
                template: path.join(`${appRoot}`, "Views", "Templates", "_Layout_Template.cshtml"),
                filename: path.join(`${appRoot}`, "Views", "Shared", "_Layout.cshtml"),
                chunks: ["vendor.bundle.js"],

            }),
            new HappyPack({
                id: "ts",
                threads: 4,
                loaders: [
                    {
                        path: "ts-loader",
                        query: {
                            happyPackMode: true,
                        },
                    },
                ],
            }),
            new ForkTsCheckerWebpackPlugin({
                checkSyntacticErrors: true,
            }),
            new webpack.HotModuleReplacementPlugin({
            }),
        ]
    }
}