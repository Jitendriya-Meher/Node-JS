
// In Node.js, the os module is a built-in module that provides various utilities related to the operating system. It allows you to access information about the underlying operating system, such as CPU architecture, network interfaces, memory, and more. This module is part of the Node.js standard library, so you can use it without installing any additional packages.

// os.arch(): Returns the string representing the operating system's CPU architecture (e.g., "x64", "arm", "ia32", etc.).

// os.platform(): Returns a string identifying the operating system platform. For example, on Windows, it will return "win32," and on macOS, it will return "darwin."

// os.type(): Returns the operating system name in a human-readable format. For instance, "Linux," "Windows_NT," "Darwin" (macOS), etc.

// os.hostname(): Returns the hostname of the operating system.

// os.totalmem(): Returns the total amount of system memory in bytes.

// os.freemem(): Returns the amount of free system memory in bytes.

// os.cpus(): Returns an array of objects, each representing a CPU core, with information such as model, speed, and times for user, nice, sys, idle, and irq.

// os.networkInterfaces(): Returns an object containing information about the network interfaces available on the system.

const os = require('os');

console.log("your sysytem is",os.arch(), "bits");

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024} GB of free memory`);

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024} GB of total memory`);

console.log("host name : ",os.hostname());

console.log("platform : ",os.platform());

console.log("temporary path : ",os.tmpdir());

console.log("OS type : ",os.type());

console.log('CPUs:');
const cpus = os.cpus();
cpus.forEach((cpu, index) => {
  console.log(`  Core ${index + 1}:`);
  console.log(`    Model: ${cpu.model}`);
  console.log(`    Speed: ${cpu.speed} MHz`);
});