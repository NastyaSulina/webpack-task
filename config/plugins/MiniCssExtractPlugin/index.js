const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = new MiniCssExtractPlugin({
    filename: devMode ? "styles.[contenthash].css" : "[contenthash].css",
});
