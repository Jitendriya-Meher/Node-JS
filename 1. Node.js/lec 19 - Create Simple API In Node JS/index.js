const fs = require('fs');
const http = require('http');

// create a server
const server = http.createServer((req,res)=>{
    console.log("server created");

    const data = fs.readFileSync( "./userApi.json","utf-8");

    if(req.url === '/'){
        res.end("home page");
    }
    else if( req.url == '/api'){

        // fs.readFile( "./userApi.json","utf-8",(err,data) =>{
        //     console.log(data);
        //     const objdata = JSON.parse(data);
        //     console.log(data);
        //     res.end(data);
        //     // res.end(objdata.results[1].department);
        // });

        res.writeHead(200, {"content-type" : "application/json"});
        res.end(data);
    }else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("<h1>Error</h1>");
    }
});

server.listen(3000,()=>{
    console.log("server listening on port number 3000");
});