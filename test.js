const path = require('path')
const str = "test.png"

const x = path.extname(str)
const fn = Date.now()
console.log(`${fn}${x}`);