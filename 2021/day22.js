const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('inputs/day2.txt'),
    console: false
});

let aim = 0, depth = 0, horizontal = 0;

readInterface.on('line', line => {
    const command = line.split(" ");
    const direction = command[0];
    const val = parseInt(command[1], 10);

    switch(direction) {
        case "forward":
            horizontal += val;
            depth += aim * val;
            break;
        case "up":
            aim -= val;
            break;
        case "down":
            aim += val;
            break;
    }
});

readInterface.on('close', () => {
    console.log('result === ', depth * horizontal);
});