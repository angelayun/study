// 没太看明白这个
/* Function.prototype.mybind = function (thisArg) {
    // 这个判断没啥用  因为mybind是在Function原型上定义的   所以this一定是一个function
    if (typeof this !== 'function') {
        throw TypeError("Bind must be called on a function");
    }
    // 拿到参数，为了传给调用者
    const args = Array.prototype.slice.call(arguments, 1),
        // 保存 this
        self = this,
        // 构建一个干净的函数，用于保存原函数的原型
        nop = function () { },
        // 绑定的函数
        bound = function () {
            // this instanceof nop, 判断是否使用 new 来调用 bound
            // 如果是 new 来调用的话，this的指向就是其实例，
            // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
            console.group('bound')
            console.log(args)
            console.log(Array.prototype.slice.call(arguments))
            console.log(this instanceof nop ? this : thisArg,
                args.concat(Array.prototype.slice.call(arguments)))
            console.groupEnd('bound')
            return self.apply(
                this instanceof nop ? this : thisArg,
                args.concat(Array.prototype.slice.call(arguments))
            );
        };

    // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
    if (this.prototype) {
        nop.prototype = this.prototype;
    }
    // 修改绑定函数的原型指向
    bound.prototype = new nop();
    // bind 只是返回一个函数，并不会执行
    return bound;
}
 */

// 第二版
Function.prototype.bind2 = function (context) {

    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args)

    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        console.log(bindArgs)
        self.apply(context, args.concat(bindArgs));
    }

}