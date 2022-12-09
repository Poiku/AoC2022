const fs = require('fs');

let consoleOutput = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split(/\r\n|\r|\n/);

let directories = [];

let currentDirPath = "/";
let directSize = 0;
let containedDirs = [];

let readingData = false;
consoleOutput.forEach((line, index) => {
    if(line.startsWith("$") || index == consoleOutput.length){
        if(readingData){
            let directory = {
                DirectoryPath : currentDirPath,
                DirectSize : directSize,
                ContainedDirs : containedDirs,
                FullSize : false
            }
            directories.push(directory);
            directSize = 0;
            containedDirs = [];
            readingData = false;
        }
        if(line.startsWith("$ cd")){
            let changeDirBy = line.slice(5, line.length);
            if(changeDirBy === "/"){
                currentDirPath = "/";
            }
            else if (changeDirBy === ".."){
                currentDirPath = currentDirPath.slice(2); //Måste kunna skära av dirs längre en en karaktär
            }
            else{
                currentDirPath += changeDirBy + "/";
            }
        }
        else if(line === "$ ls"){
            readingData = true;
        }
    }
    else if(line.startsWith("dir")){
        containedDirs.push(currentDirPath + line.slice(4, line.length) + "/");
    }
    else{
        directSize += +line.slice(0, line.indexOf(" "));
    }

});

function GetTotalSize(directoryPath){
    let currSize = 0;
    directories.forEach(element => {
            if(element.DirectoryPath == directoryPath){
                currSize = element.DirectSize;
                if(!element.ContainedDirs.length == 0){
                    element.ContainedDirs.forEach(element =>{
                        currSize += GetTotalSize(element);
                    });
                }    
            }
    }); 
    return currSize;
    }  

directories.map(element =>{
    if(!element.ContainedDirs.length == 0){
        element.DirectSize = GetTotalSize(element.DirectoryPath);
    }
    element.FullSize = true;
});

let pOneAns = 0;
directories.forEach(element =>{
    if(element.DirectSize <= 100000){
        pOneAns += element.DirectSize;
    }
});
console.log("Part 1 answer: " + pOneAns);

const TOTAL_DISKSPACE = 70000000;
const REQUIRED_DISKSPACE = 30000000;
const AVAILABLE_DISKSPACE = TOTAL_DISKSPACE - directories[0].DirectSize; // fel storlek
let potentialDirs = [];
directories.forEach(element =>{
    if(AVAILABLE_DISKSPACE + element.DirectSize >= REQUIRED_DISKSPACE){
        potentialDirs.push(element.DirectSize);
    }
});
const min = Math.min(...potentialDirs);
console.log("Part 2 answer: " + min);


//console.log(GetIndirectSize("/a/"));

let a = 0;
/*
Loopa alla i arrayen, ifall den har contained dirs loopa samma array, ifall den har samma directory path som dess contained dir så calla funktionen igen
*/
/*
Currentdirindex + counter
counter räknar hur många dirs i mappen,
*/
/*
Få directory tree
I slutet addera storleken på mapparna i en mapp för att få full storlek med indirekta filer
*/

/*
Få en array med objects som innehåller varje mapp (gjort, en bugg bara när man ska veta att man ska pusha innehållet till arrayen)
Få sedan på något sätt storleken på alla contained directories i varje objekt
Du har nu summan av storleken i varje directory
*/