const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split(/\r\n|\r|\n/);
let piles = fs.readFileSync(__dirname + '/piles.txt', 'utf-8').split(/\r\n|\r|\n/);
input.forEach(line => {
    let isDoubleInt = !(line[6] === " ");
    let amount = isDoubleInt ? parseInt(line[5] + line[6]) : parseInt(line[5]);
    let fromStack = isDoubleInt ? parseInt(line[13]) - 1 : parseInt(line[12]) - 1;
    let toStack = isDoubleInt ? parseInt(line[18]) - 1 : parseInt(line[17]) - 1;

    let temp = "";
    for(let i = 0; i < amount; i++){
        let index = piles[fromStack].length - 1; 
        temp = piles[fromStack].slice(index) + temp;
        piles[fromStack] = piles[fromStack].slice(0, index);
    }
    piles[toStack] += temp;

    /*for(var i = 0; i < amount; i++){
        let index = piles[fromStack].length - 1; 
        piles[toStack] += piles[fromStack].slice(index);
        piles[fromStack] = piles[fromStack].slice(0, index);
    }*/
});
let ans = "";
piles.forEach(element => ans += element[element.length - 1]);
console.log("Part 1 answer: " + ans);