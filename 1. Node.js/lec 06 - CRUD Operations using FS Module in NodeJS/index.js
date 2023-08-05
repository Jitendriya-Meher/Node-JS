const fs = require('fs');


// To create a folder (directory) in JavaScript using Node.js, you can use the built-in fs (File System) module. The fs.mkdirSync method is used to create a directory synchronously, while the fs.mkdir method is used for asynchronous directory creation.

// fs.mkdirSync(path[, options]);

// path (string or URL): The path of the directory to be created. It can be either a string representing the directory path or a URL.
// options (number or string or object, optional): An optional parameter specifying the directory permissions. It can be a number representing the permission mode (e.g., 0o755), a string representing the octal permission mode (e.g., "755"), or an options object.

fs.mkdirSync("jiten");

// create and write in a file
fs.writeFileSync("jiten/bio.txt","my name is Jitendriya meher");


// appending data in the file
fs.appendFileSync("./jiten/bio.txt","\nmy name is Amit meher😁😎");

// read data
// const data = fs.readFileSync("./jiten/bio.txt").toString();
const data = fs.readFileSync("./jiten/bio.txt","utf-8");
console.log("\ndata : ",data);

// rename
fs.renameSync("./jiten/bio.txt","./jiten/myBio.txt");

// delete
// myBiot.txt
fs.unlinkSync("./jiten/myBio.txt");
// file
fs.rmdirSync("./jiten");