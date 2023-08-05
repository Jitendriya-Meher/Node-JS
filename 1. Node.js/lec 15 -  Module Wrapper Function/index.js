
console.log("start");

// module wrapper
// in JavaScript, the term "module wrapper" usually refers to the way in which modules are organized and encapsulated to manage their scope and prevent polluting the global namespace. Modules are a fundamental concept in modern JavaScript development, allowing you to split your code into separate files and to encapsulate functionality, making it easier to maintain and reuse.
( function() {
    const name = "amit";
    console.log(name);

    const myName = "Jitendriya Meher";
    console.log(myName);
}) ();

// error
// console.log(name);

console.log("end");