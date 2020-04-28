const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        // output输出的filename路径必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
        // filename: '[name]_[chunkhash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: "./src/index.html",
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),  
        new CleanWebpackPlugin(),
    ]
} 