
const name = "Jitendriya";
console.log(name);

// importig modeules

// require: In Node.js, require is a built-in function used to load modules. When you call require("fs"), Node.js looks for the "fs" module, which is a core module and is available by default in Node.js.

// The fs module stands for "File System" and provides functionality to interact with the file system, allowing you to read and write files, create and delete directories, and perform various other file-related operations.
const fs = require("fs");

// creating a new file
// In Node.js, the fs.writeFileSync method is used to write data to a file synchronously. The synchronous version means that the function will block the execution of the code until the writing operation is complete. 

// fs.writeFileSync(file, data[, options]);

// file (string or URL): The path of the file to which the data will be written. It can be either a string representing a file path or a URL.
// data (string or Buffer): The data to be written to the file. It can be either a string or a Buffer.
// options (object or string, optional): An optional parameter specifying the file write options. It can be a string representing the encoding of the data, such as "utf8", or an object with options. If not provided, the data is expected to be a Buffer.

fs.writeFileSync("read.txt","hii i am amit meher");

fs.writeFileSync("read.txt","hii i am jitendriya meher");

// appending in existing file
// In Node.js, the fs.appendFileSync method is used to append data to a file synchronously. Similar to fs.writeFileSync,
fs.appendFileSync("read.txt","\nWelcom to my repository of nodejs");

// read file
//  Node.js, the fs.readFileSync method is used to read data from a file synchronously.

// const data = fs.readFileSync(path[, options]);

// path (string or URL): The path of the file to read. It can be either a string representing a file path or a URL.
// options (object or string, optional): An optional parameter specifying the file read options. It can be a string representing the encoding of the file, such as "utf8", or an object with options. If not provided, the data will be returned as a Buffer.

const buf_data = fs.readFileSync("read.txt");
console.log("\nbuffer data : ",buf_data);

const org_data = buf_data.toString();
console.log("\noriginal data : ",org_data);

// rename File
// The fs.renameSync method in Node.js is used to synchronously rename or move a file or directory. The syntax for fs.renameSync is as follows:

// fs.renameSync(oldPath, newPath);

// oldPath (string): The path of the file or directory you want to rename or move.
// newPath (string): The new path or new name for the file or directory.

fs.renameSync("read.txt","readWrite.txt");