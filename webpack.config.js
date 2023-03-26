const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';

const target = mode === 'development' ? 'web' : 'browserslist';
const devtool = mode === 'development' ? 'source-map' : false;

module.exports = {
    entry: './src/index.js',
    mode,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        clean: true,
    },
    devtool,
    target,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        hot: true,
        open: true,
        compress: true,
        port: 9000,
    },
}