const fs = require('fs');

let input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
let partOneSolved = false, partTwoSolved = false;
let requiredFirst = 4, requiredSecond = 14;
for(let i = 0; i < input.length; i++){
    if(!partOneSolved){
        let marker = input.slice(i, i + requiredFirst);
        if(!/(.).*\1/.test(marker)){
            console.log("Part 1 answer: " + (i + requiredFirst).toString());
            partOneSolved = true;
        }    
    }
    if(!partTwoSolved){
        let marker = input.slice(i, i + requiredSecond);
            if(!/(.).*\1/.test(marker)){
                console.log("Part 2 answer: " + (i + requiredSecond).toString());
                partTwoSolved = true;
            }   
    }
}