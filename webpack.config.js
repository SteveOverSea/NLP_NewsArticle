const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/client/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html"
        })
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}