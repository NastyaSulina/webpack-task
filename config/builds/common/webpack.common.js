const path = require('path');

const { scriptsRules, imagesRules, stylesRules, fontsRules, htmlRules } = require('../../rules');
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
            scriptsRules,
            imagesRules,
            stylesRules,
            fontsRules,
            htmlRules,
        ],
    },
    plugins: [
        HtmlWebpackPlugin,
        HotModuleReplacementPlugin,
        MiniCssExtractPlugin,
    ],
};