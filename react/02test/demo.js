// console.log("more".replace(/.*/g, "p"));
// "more".replace(/.*?/g, function () {
//     console.log(arguments)
// })

/* new Promise((resolve, reject) => {
    console.log(1);
    resolve(); //=>  resolve()执行才会进入.then 
}).then(() => {
    console.log(2);
});
console.log(3); */

/* function* fn () {
    yield 10;
    console.log(1);
    yield 20;
    console.log(2);
}
let gt = fn(); // 在 generator 中，执行fn方法，返回一个对象，它里面的代码不会执行
console.log(gt);
gt.next(); // 只有通过next才能控制代码一点一点的往下走
gt.next();
gt.next();
console.log(3); */

/* setTimeout(() => {
    console .log(1);
},50);
setTimeout(() => {
    console.log(2);
}, 0); //=>不是立即执行，有一个最小的反映时间
console. time('FOR');
for(let i=0;i<100000;i++){}
console. timeEnd('FOR'); //=> 循环时间<=10MS
setTimeout(() => {
    console.log(3);
}, 20);
console.log(4); */

// FOR-->4 -->2-->3-->1

async function async1 () {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2 () {
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');

/* script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout */