"use strict";

const path = require('path');
const webpack = require('webpack');
const appRoot = require('app-root-path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpackCommon = require('./webpack/webpack.common');
const webpackDev = require('./webpack/webpack.dev');
const webpackProd = require('./webpack/webpack.prod');
const { exception } = require('console');
const { merge } = require('webpack-merge');

module.exports = ({ env, dev_server }) => {

    var envConfig = () => {
        switch (env) {
            case "prod":
                return webpackProd;
            case "dev":
                return webpackDev;
            default:
                throw exception("unexpected env variable", env);
        }
    }

    return merge(webpackCommon(dev_server, __dirname), envConfig())
};