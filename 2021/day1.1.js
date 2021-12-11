const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('inputs/day1.txt'),
    //output: process.stdout,
    console: false
});

let res = 0, prev = -1;

readInterface.on('line', line => {
    const curr = parseInt(line, 10);

    if(curr > prev) ++res;
    
    prev = curr;
});

readInterface.on('close', () => {
    console.log('result === ', res-1);
});