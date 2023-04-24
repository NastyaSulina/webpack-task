const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    test: /\.css$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: ["postcss-preset-env"]
                },
            },
        },
    ],
}
