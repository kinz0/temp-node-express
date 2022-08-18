// Built-in Module - FILE Module
// include blocking (sync) and unblocking (async)

const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8' , (err, result)=>{
    if (err) {
        console.log(err);
        return;
    };
    const first = result;
    
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err);
            return;
        };
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result '${first} ${second}'`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task.');
            }
        )
    })

}) 
console.log('starting the next task.')
// this console.log line would appear before 'done with this task.'
// as the async function above is offloaded when the program executes.