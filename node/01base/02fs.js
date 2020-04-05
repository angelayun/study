const fs = require('fs');
/* 
const data =fs.readFileSync('./01os.js')
console.log(data)
console.log(data.toString())

 */
/* 
fs.readFile('./01os.js',(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
})
console.log('其它操作')

 */
/* 
const path=require('path');
fs.readFile(path.resolve(__dirname,'./download.js'),(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
})

 */
/* 
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
readFile('./01os.js').then(data => {
    console.log(data);
}) */

/* 
// node v10版本以上才有这个语法
const fsp = require('fs').promises;
fsp.readFile('./01os.js').then(data => {
    console.log(data)
})

 */

(async () => {
    const fs = require('fs');
    const { promisify } = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('./01os.js')
    // console.log(data.toString())
    // 这样也可以
    console.log(Buffer.from(data).toString('utf-8'))
})()