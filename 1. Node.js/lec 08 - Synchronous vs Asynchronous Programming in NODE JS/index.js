const fs = require('fs');


let data = fs.readFileSync("read.txt","utf-8");
console.log("\nsync data : ",data);
console.log("after the sync data : ");

console.log();

data = fs.readFile("read.txt","utf-8",(err,data) => {
    console.log("\n inside async",data);
});
console.log("\nasync data : ",data);
console.log("after the async data : ");