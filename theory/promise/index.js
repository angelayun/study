/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result')
    }, 1000);
})

p1.then(res => console.log(res), err => console.log(err))
 */

/* const p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        // resolve('result')
        resolve('1')
    }, 1000);
})

// p1.then(res => console.log(res), err => console.log(err))
p1
    .then(res => {
        console.log(res)
        return 2
    })
    .then()             //值穿透测试
    .then(res => {
        console.log(res)
        return 3
    })
    .then(res => {
        console.log(res)
        throw new Error('reject测试')   //reject测试
    })
    .then(() => { }, err => {
        console.log(err)
    }) */


const foo = _asyncToGenerator(function* () {
    try {
        console.log(yield Promise.resolve(1))   //1
        console.log(yield 2)                    //2
        return '3'
    } catch (error) {
        console.log(error)
    }
})

foo().then(res => {
    console.log(res)                          //3
})


