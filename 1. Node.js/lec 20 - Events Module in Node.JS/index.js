
// Node.js has an 'events' module that provides an implementation of the EventEmitter class, allowing developers to handle and trigger custom events in their applications. This module is part of the Node.js standard library and is utilized for building event-driven applications and creating custom event emitters.

// Import the events module:
const events = require('events');

// Create an instance of the EventEmitter class:
const eventEmitter = new events.EventEmitter();

// Register event listeners using the on() or addListener() methods. These listeners will be executed when the corresponding event is emitted:
eventEmitter.addListener("sayMyName", ()=>{
    console.log("hii jitendriya");
});

eventEmitter.addListener("sayMyName", ()=>{
    console.log("hii AMIT");
});

eventEmitter.addListener("sayMyName", ()=>{
    console.log("hii world");
});

// To emit an event and trigger the corresponding listeners, use the emit() method:
eventEmitter.emit('sayMyName');




// like function declaration/definitions 
eventEmitter.on("checkPage",(sc,msg) => {
    console.log(`status code is ${sc}, and the page is ${msg}`);
});

// like function call
eventEmitter.emit('checkPage', 200, "OK");