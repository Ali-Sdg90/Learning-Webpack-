const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    // mode: "production",
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    },
    output: {
        filename: "[name]-[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        // rules: [
        //     {
        //         test: /\.css$/,
        //         use: ["style-loader", "css-loader"],
        //     },
        // ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader", //1. Turns sass into css
                ],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]",
                    // name: "[path][emoji:5][name].[hash].[ext]",
                    outputPath: "images/",
                    publicPath: "images/",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new CleanWebpackPlugin(),
    ],
};
