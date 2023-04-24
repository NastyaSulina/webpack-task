const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, '../../../src/index.html'));

module.exports = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../../src/index.html'),
    filename: 'index.html',
});
