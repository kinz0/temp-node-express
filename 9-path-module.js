// Built-in Module - PATH Module

const path = require('path')

console.log(path.sep)
// output: /

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
// output: /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base)
// output: test.txt

// get the absolute path of the current file __dirname
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
// output: /Users/kelvin/Desktop/vsCode/node_express_js/content/subfolder/test.txt
