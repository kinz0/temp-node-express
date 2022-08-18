// Built-in Module - FILE Module
// include blocking (sync) and unblocking (async)

// destructuring
const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

// node will either create or overwrite the file
writeFileSync('./content/result-sync.txt', 
`Here is the result '${first} ${second}'`,
{ flag: 'a' }  /* <---repeat the string once by appending */
)

console.log('done with this task.');
console.log('starting the next one.');