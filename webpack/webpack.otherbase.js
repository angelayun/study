const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const prodConfig = require('./webpack.pro')
const devConfig = require('./webpack.dev')
const commonConfig = {
    entry: {
        index: './src/index_1.js'
    },
    output: {
        // output输出的filename路径必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
        // filename: '[name]_[chunkhash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页---',
            template: "./src/index.html",
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}
module.exports = (env) => {
    //外部传⼊入的全局变量量 module.exports = (env)=>{
    if (env && env.production) {
        return merge(commonConfig, prodConfig)
    } else {
        return merge(commonConfig, devConfig)
    }
}