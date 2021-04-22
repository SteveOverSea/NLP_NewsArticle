const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html"
        }),
        new MiniCssExtractPlugin({ 
            filename: "main.css" 
        }),
        new WorkboxPlugin.GenerateSW()
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}