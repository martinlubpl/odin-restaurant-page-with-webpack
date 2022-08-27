const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        nav: './src/nav.js'
    },

    // map compiled to source for debugging
    devtool:'inline-source-map',

    devServer: {
        static: './dist',
    },
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    optimization: {
        runtimeChunk: 'single',
    },
    
    // TODO: change to production
    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './[name].css'
        }),
    ],
    
    
    // extract css to external file
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};