module.exports = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    use: {
        loader: 'image-webpack-loader',
        options: {
            mozjpeg: {
                progressive: true,
                quality: 50,
            },
        }
    }
}

