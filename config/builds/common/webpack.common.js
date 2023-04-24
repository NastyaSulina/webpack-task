const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const { scripts_rules, images_rules, styles_rules, fonts_rules, html_rules } = require('../../rules');

module.exports = {
    entry: path.resolve(__dirname, '../../../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../../dist'),
        clean: true,
        assetModuleFilename: 'assets/[contenthash][ext]'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            scripts_rules,
            images_rules,
            styles_rules,
            fonts_rules,
            html_rules,
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../../../src/index.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
        }),
    ],
};