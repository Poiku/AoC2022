const fs = require('fs');

let input = fs.readFileSync(__dirname + '/testinput.txt', 'utf-8');
let counter = 0;
for(let i = 0; i < input.length; i++){
    if(input[i] != input[i + 1] && input[i] != input[i + 2] && input[i] != input[i + 3] /* check second */ && input[i + 1] != input[i + 2] && input[i + 1] != input[i + 3] /* check third */ && input[i + 2] != input[i + 3]){
        console.log(counter);
        if(counter === 0){
            console.log("Part 1 answer: " + (i + 4).toString());
            counter++;
            continue;
        }
        else if(counter === 3){
            if(input[i+3] != input[i+4]){
                console.log("Part 2 answer: " + i);
                console.log(input[i] + " " + i);
                break;
            }
        }
        else{
            i += 4;
            counter++;
            continue;
        }
    }
    else if(counter >= 1){
        counter = 1;
    }
}