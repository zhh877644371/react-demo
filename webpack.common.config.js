const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],//src文件夹下面的以.js结尾的文件要使用babel解析,cacheDirectory是用来缓存编译结果，下次编译加速
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        /*自动帮你生成一个 html 文件，并且引用相关的 assets 文件(如 css, js)*/
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        /*优化缓存,使公共库代码hash名不变，缓存在用户本地*/
        new webpack.HashedModuleIdsPlugin(),
        /*提取公共代码例如react库，进行缓存*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        /*runtime:在模块交互时，连接模块所需的加载和解析逻辑*/
        /*此处作用是使每次js文件改变时，vendor公共库hash值不变，读取缓存即可*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],

    /*优化路径，增加别名 */
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};

module.exports = commonConfig;