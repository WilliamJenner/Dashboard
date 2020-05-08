"use strict";

const path = require('path');
const webpack = require('webpack');
const appRoot = require('app-root-path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const commonHtmlWebpackPluginConfig = {
    minify: false,
    inject: false,
    devServer: { url: 'https://localhost:8081' }
}

module.exports = {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    entry: {
        app: ['./src/scripts/index.tsx'],
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist/'
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
            ...commonHtmlWebpackPluginConfig,
            title: "Index",
            template: path.join(`${appRoot}`, "Views", "Templates", "_App_Template.cshtml"),
            filename: path.join(`${appRoot}`, "Views", "Home", "Index.cshtml"),
            chunks: ["app.bundle.js"],
        }),
        new HtmlWebPackPlugin({
            ...commonHtmlWebpackPluginConfig,
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
    ]
};