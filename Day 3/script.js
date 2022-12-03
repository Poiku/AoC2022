const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
let inputArray = input.split(/\r\n|\r|\n/);
let rucksack = [];

/* Split each rucksack into two compartments */
for(let i = 0; i < inputArray.length; i++){
  let middle = ((inputArray[i].length / 2));
  
  let firstCompartment = inputArray[i].slice(0,middle);
  let secondCompartment = inputArray[i].slice(middle);

  rucksack[i] = [firstCompartment, secondCompartment];
}

/* Part 1 */
let p1total = 0;
for(let i = 0; i < rucksack.length; i++){
    let foundMatch = false;
    for(let j = 0; j < rucksack[i][0].length; j++){   
      if(!foundMatch){
        for(let h = 0; h < rucksack[i][1].length; h++){
          if(rucksack[i][0][j] === rucksack[i][1][h]){
            p1total += GetPriority(rucksack[i][0][j]);
            foundMatch = true;
            break;
            }
        }  
      }   
    }
}
console.log("Part 1 answer: " + p1total);

/* Part 2 */
let p2total = 0;
let foundMatch = false;
for(let i = 0; i < inputArray.length; i+=3){
  foundMatch = false;
    for(let j = 0; j < inputArray[i].length; j++){
      for(let k = 0; k < inputArray[i+1].length; k++){
        if(inputArray[i][j] === inputArray[i+1][k] && !foundMatch){
          for(let m = 0; m < inputArray[i+2].length; m++){
            if(inputArray[i+1][k] === inputArray[i+2][m]){
              p2total += GetPriority(inputArray[i+2][m]);
              foundMatch = true;
              break;
            }
          }
        }
      }
    }  
}
console.log("Part 2 answer: " + p2total);


function GetPriority(char){
let val = char.charCodeAt(0);
if(val <= 90 && val >= 65){
  return val - 38;
}
if(val <= 122 && val >= 97){
  return val - 96;
}
return;
}