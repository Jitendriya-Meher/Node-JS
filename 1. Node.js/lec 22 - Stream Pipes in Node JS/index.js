
const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {

    // , stream pipes provide a convenient way to transfer data from a readable stream to a writable stream. Stream piping is an elegant approach to handle data transmission between streams without the need for manual event listeners and data handling. It simplifies the process of reading from one stream and writing to another, making code more concise and readable.

    // The pipe() method is available on readable streams, and it allows you to connect them to writable streams easily. When you call readableStream.pipe(writableStream), data is automatically read from the readable stream and written to the writable stream until the readable stream ends or the writable stream becomes full. The data is transferred in chunks, so it's an efficient way to handle large datasets.

    const rstream = fs.createReadStream("text.txt");

    rstream.pipe(res);

})


server.listen(3000,()=>{
    console.log("server listening on port 3000");
});