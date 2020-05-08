const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./index");

const defaultOptions = {
    inject: false,
};

/**
 * Retrieve the templates and inject front end assets into the razor views.
 * @param {*} options - Whether to include the dev server script.
 */
const getTemplates = options => {
    return [
        {
            template: "_Layout_Template.cshtml",
            filename: path.join("Shared", "_Layout.cshtml"),
            chunks: ["site", "commons"],
            devServer: options.dev_server ? config.devServer : false,
        },
        {
            template: "_App_Template.cshtml",
            chunks: ["appVendor", "app"],
            filename: path.join("Home", "Index.cshtml"),
        },
    ];
};

/**
 * Retrieve a list of html plugins for each template defined.
 * @param {any} config - The system config to interpolate with
 * template config.
 * @returns {Array<object>} - A list of html webpack plugins.
 */
function getHtmlPlugins(definedTemplateConfig) {
    const templates = getTemplates(definedTemplateConfig);

    return templates.map(templateConfig => {
        return new HtmlWebpackPlugin({
            ...defaultOptions,
            ...templateConfig,
            template: path.join(config.templateSrcPath, templateConfig.template),
            filename: path.join(config.templateDistPath, templateConfig.filename),
        });
    });
}

module.exports = getHtmlPlugins;