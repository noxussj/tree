const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle-[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }],
    },
    plugins: [new HtmlWebpackPlugin()],
};
