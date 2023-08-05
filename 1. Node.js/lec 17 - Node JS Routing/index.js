
const http = require('http');

const server = http.createServer( (req,res) => {
    // console.log(req.url);
    
    if( req.url == "/"){
        res.end("Hello, world! you are on main page");
    }
    else if( req.url == "/about" ){
        res.end("Hello, world! you are on ABOUT page");
    }
    else if( req.url == "/me" ){
        res.end("Hello, world! you are on MY HOME page");
    }else{
        // startus code
        res.writeHead( 404 , {'Content-Type': 'text/html'});
        res.end("<h1>Page not found..!!</h1>");
    }
});

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

server.listen(8000,"127.0.0.1", ()=>{
    console.log("Listening on port number 8000");
});
