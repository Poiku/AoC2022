const fs = require('fs');
var arr = [];
var totalScore = 0;
fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    arr = data.split(/\r?\n/);
    
    for(let i = 0; i < arr.length; i++){
        switch (arr[i][0]) {
            case "A":
                if(arr[i][2] === "X"){
                    Loss("Z");
                }
                if(arr[i][2] === "Y"){
                    Draw("X");
                }
                if(arr[i][2] === "Z"){
                    Win("Y");
                }
                break;
            
            case "B":
                if(arr[i][2] === "X"){
                    Loss("X");
                }
                if(arr[i][2] === "Y"){
                    Draw("Y");
                }
                if(arr[i][2] === "Z"){
                    Win("Z");
                }
                break;
    
            case "C":
                if(arr[i][2] === "X"){
                    Loss("Y");
                }
                if(arr[i][2] === "Y"){
                    Draw("Z");
                }
                if(arr[i][2] === "Z"){
                    Win("X");
                }
                break;
            default:
                break;
        }
    }
    console.log(totalScore);
});

function Win(face){
    totalScore += 6 + GetVal(face);
}

function Draw(face){
    totalScore += 3 + GetVal(face);
}

function Loss(face){
    totalScore += 0 + GetVal(face);
}


function GetVal(input){
    switch (input) {
        case "X":
            return 1;

        case "Y":
            return 2;
        
        case "Z":
            return 3;
        default:
            break;
    }
}