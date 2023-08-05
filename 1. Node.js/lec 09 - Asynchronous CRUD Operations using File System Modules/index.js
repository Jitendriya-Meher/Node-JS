
// import
const fs = require('fs');

// create a folder
fs.mkdir("jiten", (err)=>{
    console.log('folder created');
});

// crate a .txt file
fs.writeFile("./jiten/bio.txt","My name is Jitendriya", (err)=>{
    console.log("error 1 : ",err);
});

// append data into .txt file
fs.appendFile("./jiten/bio.txt","\nMy name is amit", (err)=>{
    console.log("error 2 : ",err)
});

// read the data
fs.readFile("./jiten/bio.txt","utf-8",(err,data) =>{
    console.log("data 3 : ",data);
});

// rename the .txt file
fs.rename("./jiten/bio.txt","./jiten/myBio.txt", (err)=>{
    console.log("Rename done : 4");
});

// delete the .txt file
fs.unlink("./jiten/myBio.txt", (err)=>{
    console.log("error : 5",err);
});

// delete the  file
fs.rmdir("./jiten", (err)=>{
    console.log("folder deleted :");
});