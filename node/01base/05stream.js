const fs = require('fs');
const rs = fs.createReadStream('01os.js')
const ws = fs.createWriteStream('01os-copy.js')
rs.pipe(ws)