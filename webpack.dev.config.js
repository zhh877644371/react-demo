const merge = require('webpack-merge');

const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    /*代码报错优化*/
    devtool: 'inline-source-map',

    /*入口*/
    entry: {
        app: [
            "babel-polyfill",
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    /*实现了按需加载以及页面的缓存*/
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },

    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
        }]
    },

    devServer: {
        port: 8090,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
}

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);