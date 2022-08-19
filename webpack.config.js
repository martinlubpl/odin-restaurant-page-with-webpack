const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // TODO: change to production
    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    
    
    
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};