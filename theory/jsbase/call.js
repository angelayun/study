Function.prototype.mycall = function (thisArg) {
    // 声明一个 Symbol 属性，防止 fn 被占用
    const fn = Symbol('fn')
    // const args = [...arguments].slice(1);
    const args = Array.prototype.slice.apply(arguments, [1])
    //[...arguments].slice(1);
    // 调用call时没传  默认为window
    thisArg = thisArg || window;
    // 将调用call函数的对象添加到thisArg的属性中
    thisArg[fn] = this; // 
    // 执行该属性
    const result = thisArg[fn](...args);
    // 删除该属性
    delete thisArg[fn];
    // 返回函数执行结果
    return result;
}

Function.prototype.mycall2 = function (context) {
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        // 此处的arguments常量字符串应该与外面的arguments变量对应
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result
}

