/* const bar = function () {
    console.log(this.name, arguments);
};
bar.prototype.name = 'bar';

const foo = {
    name: 'foo'
};

const bound = bar.mybind(foo, 22, 33, 44);
new bound(8, 5); // bar, [22, 33, 44]
bound(7, 8, 9); // foo, [22, 33, 44]
 */

/* 
const bar = function () {
    console.log(this.name, arguments);
};

bar.prototype.name = 'bar';

const foo = {
    name: 'foo'
};

bar.mycall(foo, 1, 2, 3); // foo [1, 2, 3]
// bar.myapply(foo, [1, 2, 3]); // foo [1, 2, 3]
// bar.myapply(foo); // foo [1, 2, 3] */

/* // 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar (name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

// bar.call(null); // 2

console.log(bar.mycall2(obj, 'kevin', 18));
console.log(bar.mycall(obj, 'kevin', 18)); */

/* 
var foo = {
    value: 1
};

function bar (name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind2(foo, 'daisy');
bindFoo('18'); */

var value = 2;

var foo = {
    value: 1
};

function bar (name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
