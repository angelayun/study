// 本质上是一个类
// 作用于webpack的整个生命周期
class MyPlugin {
    constructor(options) {
        console.log(options)
        this.options = options;
    }
    apply (compiler) {
        console.log('开始执行')
        compiler.hooks.emit.tap('MyPlugin', (compilation) => {
            console.log('这是一个同步的勾子')
            compilation.assets['haha1.txt'] = {
                source: () => {
                    return '这仅仅是一个测试--同步'
                },
                size: function () {
                    return 1000
                }
            }
        })
        compiler.hooks.emit.tapAsync('MyPlugin', (compilation, cb) => {
            // console.log(compilation.assets)
            compilation.assets['haha.txt'] = {
                source: () => {
                    return '这仅仅是一个测试'
                },
                size: function () {
                    return 1000
                }
            }
            cb()
        })
    }
}
module.exports = MyPlugin