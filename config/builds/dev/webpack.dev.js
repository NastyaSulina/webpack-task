const { merge } = require('webpack-merge');
const common = require('../common/webpack.common.js');
const path = require('path');

module.exports = merge({
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../../../dist'),
        },
        hot: true,
        open: true,
        compress: true,
        port: 9000,
    },
}, common)