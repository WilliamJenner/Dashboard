"use strict";

const webpackCommon = require('./webpack/webpack.common');
const webpackDev = require('./webpack/webpack.dev');
const webpackProd = require('./webpack/webpack.prod');
const { merge } = require('webpack-merge');
const webpackElectron = require('./webpack/webpack.electron');

function envConfig(env) {
    if (env.development) {
        return webpackDev(__dirname);
    }
    else if (env.prod) {
        return webpackProd(__dirname);
    }

    throw new Error("unexpected env variable");
}

module.exports = (env, argv) => {
    console.log({ argv });
    return merge(webpackCommon(__dirname), envConfig(env))
};

