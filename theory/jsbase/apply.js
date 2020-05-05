/* Function.prototype.myapply = function (thisArg) {

    const args = arguments[1];
    const fn = Symbol('fn')
    thisArg[fn] = this;

    const result = thisArg[fn](...args);

    delete thisArg[fn];

    return result;
}; */

Function.prototype.apply = function (context, arr) {
    // Object(context) null undefine都会返回true
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}