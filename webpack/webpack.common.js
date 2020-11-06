const path = require('path');
const webpack = require('webpack');
const appRoot = require('app-root-path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const commonHtmlWebpackPluginConfig = () => {
    return {
        minify: false,
        inject: true,
        files: {
            css: ["./src/styles/index.scss"]
        },
    }
}

module.exports = (dir_name) => {
    return {
        // Enable sourcemaps for debugging webpack's output.
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            mainFields: ['main', 'module', 'browser'],
        },
        entry: './src/app.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
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
            contentBase: path.join(__dirname, '../dist/renderer'),
            historyApiFallback: true,
            compress: true,
            hot: true,
            port: 4000,
            publicPath: '/',
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