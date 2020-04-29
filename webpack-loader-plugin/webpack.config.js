const path = require('path')
const MyPlugin = require('./myplugin/my-plugin')
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    mode: 'development',
    resolveLoader: {
        // webpack 找loader的顺序是先从node_modules  如果没找到再去myloader路径下找
        modules: ['node_modules', './myloader']
    },
    module: {
        /* rules: [
            {
                test: /.js$/,
                use: [
                    {
                        // loader: path.resolve(__dirname, './myloader/my-loader.js'),
                        loader: 'my-loader',
                        options: {
                            name: 'my-loader'
                        }
                    },
                    'other-loader'
                    // path.resolve(__dirname, './myloader/other-loader.js')

                ]
            }
        ] */
    },
    plugins: [
        new MyPlugin({
            name: 'myPlugin'
        })
    ]
}