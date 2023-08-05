
const fs = require('fs');

// create and write files
fs.writeFile("read.txt","Today is my day", (err) => {
    console.log(" 1 . error : ",err);
});

// append data in the file
fs.appendFile("read.txt","\nGod is always with me!", (err) => {
    console.log(" 2 . error : ",err);
});

// read the data in file
const data = fs.readFile("read.txt","utf-8", (err, data) => {
    console.log(' 3 . ',data);
});

console.log("hii");
console.log(" 4 . data : ", data);