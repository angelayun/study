const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')
module.exports = {
    mode: "development",
    // devtool:'eval',
    devtool:'inline-source-map',
    devServer:{
         contentBase:'./dist',
         open:true,
         port:8081,
         hotOnly:true,
         proxy:{
             "/api":{
                 target:'http://localhost:9092/',
             }
         }
    },
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        // output输出的filename路径必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
        // filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.png/,
                // loader:'file-loader'
                // 可以把url-loader当成file-loader来用
                // loader: 'url-loader'
                // 如果需要配置项的话就不能仅仅用字符串 而应该使用对象
                /* 
                use:{
                    loader:'file-loader',
                    options:{
                        outputPath:'images/',
                        name:'[name]_[contenthash:8].[ext]'
                    }
                } */

                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',
                        name: '[name]_[contenthash:8].[ext]',
                        // limit:2048,
                    }
                }
            },
            {
                test: /\.(woff2|woff)$/,
                loader: "file-loader"
            },
            {
                test: /\.less/,
                // loader: ['style-loader', 'css-loader','less-loader']
                // 简写的话可以写成如下
                // use: ['style-loader', ' css-loader', 'less-loader', 'postcss-loader']
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]

            }
            /* {
                test: /\.css/,
                loader: ['style-loader', 'css-loader']
            } */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: "./src/index.html",
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: '注册',
            template: "./src/index.html",
            
            inject: 'head',
            chunks: ['login'],
            filename: 'login.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()  
    ]
    /* watch: true, //false
    watchOptions: {
        //默认为空，不监听的文件或者目录，支持正则
        ignored: /node_modules/,
        //监听到文件变化后，等300ms再去执行，默认300ms,
        aggregateTimeout: 300,
        //判断文件是否发生变化是通过不停的询问系统指定文件有没有变化，默认每秒问1次
        poll: 1000//ms
    } */
} 