const path = require('path');

const { scripts_rules, images_rules, styles_rules, fonts_rules, html_rules } = require('../../rules');
const { HotModuleReplacementPlugin, HtmlWebpackPlugin, MiniCssExtractPlugin } = require('../../plugins');

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
        HtmlWebpackPlugin,
        HotModuleReplacementPlugin,
        MiniCssExtractPlugin,
    ],
};