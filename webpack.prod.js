const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production', 
    devtool: 'source-map',   
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader", 
                "sass-loader" 
            ]
        }]
    },
    plugins: [
        new CopyPlugin([
            { from: './src/index.html' },
        ]),
        new MiniCssExtractPlugin({               
            filename: "css/[name].css"
        })            
    ]
});
