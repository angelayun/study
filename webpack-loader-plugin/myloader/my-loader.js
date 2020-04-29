const utils = require('loader-utils');

// 同步的情况
/* module.exports = function (source) {
    let content = source
    // 不能为箭头函数
    // console.log(content)
    // console.log(this.query)
    const options = utils.getOptions(this)
    console.log(options)
    content = content.replace('hello', 'angela')
    return this.callback(null, content)
    // return content;
} */

module.exports = function (source) {
    let content = source
    // 不能为箭头函数
    // console.log(content)
    // console.log(this.query)
    const options = utils.getOptions(this)
    const callback = this.async()
    setTimeout(() => {
        content = content.replace('angela', '李云花嘻嘻')
        return callback(null, content)
    }, 2000);
}