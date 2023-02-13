const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: './assets/src/js/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [

            {
                test: /.[jt]s$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            chrome: "58",
                                            ie: "7",
                                        },
                                        corejs: "3",
                                        useBuiltIns: "usage",
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./assets/src/html/index.html" }),
        // new webpack.SourceMapDevToolPlugin()
    ]
};