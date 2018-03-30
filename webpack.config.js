const merge = require('webpack-merge');

const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "postcss-loader"]
            })
        }]
    },
    plugins: [
        /*打包优化，打包前自动清理dist文件夹*/
        new CleanWebpackPlugin(['dist']),
        /*进行文件压缩*/
        new UglifyJSPlugin(),
        /*指定环境进行代码优化,进一步压缩*/
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        /*抽取css文件*/
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
};

module.exports = merge(commonConfig, publicConfig);