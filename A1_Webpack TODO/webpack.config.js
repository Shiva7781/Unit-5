const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"),
        filename: "bundle.js"
    },
    
    // mode:"development",        // >>> Whole data in bundle.js
    mode: "production", // >>> optimized & smallest possible bundle data in bundle.js

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
}