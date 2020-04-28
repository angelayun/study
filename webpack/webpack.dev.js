
const webpack = require('webpack')
const path = require("path")
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const devConfig = {
    mode: "development",
    // devtool:'eval',
    devtool: 'cheap-module-eval-source-map',
    output: {
        // output输出的filename路径必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    // 为了弄babel 特意写的  其实是应该在base里面的
    entry: {
        // index: './src/bable_index.js'
        index: './src/react_index.jsx',
        // index:'./src/treesharking_index.js',
    },
    // optimization: {
    //     usedExports: true
    // },
    optimization: {
        splitChunks: {
            chunks:'all',
            // minChunks:2,
            automaticNameDelimiter:'_',
            cacheGroups:{
                commons:{
                    test:/(react|react-dom)/,
                    name:"react_vendors",
                    chunks:"all"
                  },
            }
        }
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8081,
        hotOnly: true,
        proxy: {
            "/api": {
                target: 'http://localhost:9092/',
            }
        }
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

            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                //  use:['babel-loader']
                use: {
                    loader: 'babel-loader',
                    /* options: {
                        // presets: ["@babel/preset-env"]


                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        edge: "17",
                                        firefox: "60",
                                        chrome: "67",
                                        safari: "11.1"
                                    },
                                    useBuiltIns: "usage"//按需注⼊入 
                                }
                            ]
                        ]


                    } */
                }
            }
            /* {
                test: /\.css/,
                loader: ['style-loader', 'css-loader']
            } */
        ]
    },
    plugins: [
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
module.exports = merge(baseConfig, devConfig);