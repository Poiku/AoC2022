const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
let inputArray = input.split(/\r\n|\r|\n/);
inputArray = inputArray.map(element => element.split(","));
inputArray = inputArray.map(element => element.map(element => element.split("-")));

let countP1 = 0, countP2 = 0;
for(let i = 0; i < inputArray.length; i++){
    let firstDigit1 = parseInt(inputArray[i][0][0]), firstDigit2 = parseInt(inputArray[i][1][0]), secondDigit1 = parseInt(inputArray[i][0][1]), secondDigit2 = parseInt(inputArray[i][1][1]);
    // Part 1
    if(firstDigit1 <= firstDigit2 && secondDigit1 >= secondDigit2 || firstDigit2 <= firstDigit1 && secondDigit2 >= secondDigit1){
        countP1++;
    }
    // Part 2
    if(secondDigit1 >= firstDigit2 && firstDigit1 <= secondDigit2){
        countP2++;
    }
}
console.log("Part 1 answer: " + countP1);
console.log("Part 2 answer: " + countP2);