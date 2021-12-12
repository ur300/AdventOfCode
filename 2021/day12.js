const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('inputs/day1.txt'),
    //output: process.stdout,
    console: false
});

let res  = 0,
    arr  = [],
    i    = 0,
    tmp1, tmp2, tmp3;

readInterface.on('line', line => {
    const curr = parseInt(line, 10);
    
    switch(i % 3) {
        case 0:
            tmp1 = curr;
            break;
        case 1:
            tmp2 = curr;
            break;
        case 2:
            tmp3 = curr;
            break;
    }

    if(tmp1 && tmp2 && tmp3) {
        arr.push(tmp1 + tmp2 + tmp3);
    } 

    ++i;
});

readInterface.on('close', () => {
    for(let i = 0; i < arr.length; ++i) {
        if (i == arr.length - 1) continue;
        
        if(arr[i] < arr[i + 1]) ++res;
    }
    console.log('result === ', res);
});