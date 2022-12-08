const fs = require('fs');

let consoleOutput = fs.readFileSync(__dirname + '/testinput.txt', 'utf-8').split(/\r\n|\r|\n/);
let currentDirPath = "/";

let currentIndex = -1;
let directories = [];

let directSize = 0;
let containedDirs = [];
let dirCounter = 1;
consoleOutput.forEach(line => {
    if(line.startsWith("$")){
        if(line.startsWith("$ cd")){
            let changeDirBy = line.slice(5, line.length);
            if(changeDirBy === "/"){
                currentDirPath = "/";
            }
            else if (changeDirBy === ".."){
                currentDirPath = currentDirPath.slice(2);
            }
            else{
                currentDirPath += changeDirBy + "/";
            }
        }
        else if(line === "$ ls"){
            let directory = {
                DirectoryPath : currentDirPath,
                DirectSize : directSize,
                ContainedDirs : containedDirs
            }
            directories.push(directory);
            directSize = 0;
            containedDirs = [];
            currentIndex++;
        }
    }
    else if(line.startsWith("dir")){
        containedDirs.push(currentDirPath + line.slice(4, line.length));
    }
    else{
        directSize = +line.slice(0, line.indexOf(" "));
    }

});

function GetDirectSize(line){
    if(line.startsWith("dir")){

    }
    else{
        return +line.slice(0, line.indexOf(" "));
    }
}

console.log(directories);
let a = 0;
/*
Currentdirindex + counter
counter räknar hur många dirs i mappen,
*/
/*
Få directory tree
I slutet addera storleken på mapparna i en mapp för att få full storlek med indirekta filer
*/