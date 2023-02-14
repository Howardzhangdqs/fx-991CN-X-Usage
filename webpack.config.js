const path                 = require("path");
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const webpack              = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/entry.js',
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
                                            // ie: "7",
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
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".css"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin()
    ],
    watch: true,
};