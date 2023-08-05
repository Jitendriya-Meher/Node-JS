// In Node.js, streams and buffers are essential concepts used for handling data efficiently, especially when dealing with large amounts of data or data that arrives in chunks.

// Streams:
// Streams are a fundamental concept in Node.js that allow you to read or write data in chunks rather than loading the entire data into memory at once. This is particularly useful when dealing with large files or network operations where reading or writing everything at once could consume a lot of memory.
// Streams are instances of the stream module classes and can be of several types, such as Readable, Writable, Duplex, and Transform streams.

// Readable streams: They allow you to read data from a source, such as a file or an HTTP request.
// Writable streams: They allow you to write data to a destination, such as a file or an HTTP response.
// Duplex streams: They represent both readable and writable streams and enable bidirectional data flow.
// Transform streams: They are a type of duplex streams that modify or transform the data while it's being read or written.



// Some of the common events emitted by streams are:

// 'data': Emits when a chunk of data is available to be read from a Readable stream.
// It provides the chunk of data as an argument to the event handler.

// 'end': Emits when there is no more data to be read from a Readable stream.
// Indicates that the stream has reached its end, and no further data will be available.

// 'error': Emits when an error occurs during reading from or writing to a stream.
// It is essential to handle this event to avoid uncaught exceptions and handle stream-related errors gracefully.

// 'finish': Emits when all data has been written to a Writable stream.
// Indicates that the stream has completed writing data.

// 'drain': Emits when a Writable stream becomes writable after previously being in a 'paused' state.
// This event is useful to manage backpressure in streams, allowing a producer to control the flow of data to a consumer.

// 'open': Emits when a Readable or Writable stream is opened.
// This event is typically used with file streams to notify that the file has been successfully opened.

// 'close': Emits when a Readable or Writable stream is fully closed, and there will be no more events emitted.
// Indicates the end of the stream's lifecycle.


const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request" , (req, res) => {
    
    // fs.readFile("text.txt", (err, data) => {
    //     if(err){
    //         return console.error(err);
    //     }else{
    //         res.end(data.toString);
    //     }
    // });

    const rstream = fs.createReadStream("text.txt");

    rstream.on( "data", (chunkData) => {
        res.write(chunkData);
    });

    rstream.on("end", () => {
        res.end();
    });

    rstream.on("error", (err) => {
        console.log(err);
        res.end("File not found!");
    })

});

server.listen(3000,()=>{
    console.log("server listening on port 3000")
});