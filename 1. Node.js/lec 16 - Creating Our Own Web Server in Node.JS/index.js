
const http = require('http');

// In Node.js, the http module is a core module that provides functionality for creating HTTP servers and making HTTP requests. It allows you to interact with the HTTP protocol, handle incoming requests, and send responses.

// Creating an HTTP Server:
// You can use the http.createServer() method to create an HTTP server that listens for incoming requests and sends appropriate responses

const server = http.createServer((request, response) => {
    response.end("server ends here! \ncreating my first server\n\nhii i am jitendriya meher");
});


// In Node.js, the server.listen() method is used to bind and start the HTTP server to a specific port and optionally a hostname. It takes two arguments: the port number and an optional hostname.

// port: The port number to bind the server to. It is a required parameter.
// hostname (optional): The hostname or IP address the server should listen on. If not provided, the server will accept connections on any IPv4 address ('0.0.0.0') or IPv6 address ('::').
// backlog (optional): The maximum length of the queue of pending connections. Default value is 511.
// callback (optional): A function that will be called once the server starts listening for incoming connections.

server.listen(8000,"127.0.0.1", ()=>{
    console.log("listening on 8000 port number");
});
