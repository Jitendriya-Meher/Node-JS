
// object
const bio = {
    name:"amit",
    age:21,
    study:"B-tech",
    branch:"CSE"
}

console.log("bio = ",bio);

console.log("name = ",bio.name);
console.log("age = ",bio.age);
console.log("branch = ",bio.branch);

// conver object to json
const jsonData = JSON.stringify(bio);
console.log("JSON data = ",jsonData);
// give undefined value
console.log("name = ",jsonData.name);


// convert json to object
const objectData = JSON.parse(jsonData);
console.log("Object data = ",objectData);
console.log("name = ",objectData.name);


// store the json data in another file
const fs = require("fs");

// write data to file
fs.writeFile("jsonData.json",jsonData, (err)=>{
    console.log("done");
});

fs.readFile("jsonData.json","utf-8",(err, data)=>{
    console.log("api data = ",data);
    const objdata = JSON.parse(data);
    console.log("object data = ",objdata);
});