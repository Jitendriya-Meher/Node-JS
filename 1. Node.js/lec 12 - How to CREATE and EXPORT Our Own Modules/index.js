// import custom module
const {add,sub,name} = require("./operator.js");

const op = require("./operator.js");

console.log(op);
console.log(" 5 + 6789 = ",op.add(5,6789));


console.log(" 5 + 589 = ",add(5,589));
console.log(" 5 - 589 = ",sub(5,589));
console.log("name = ",name);