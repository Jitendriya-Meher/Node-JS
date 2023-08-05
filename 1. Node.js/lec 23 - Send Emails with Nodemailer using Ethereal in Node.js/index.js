
const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {

    res.send("server starting");

});

app.get('/sendMail', (req, res) => {});


const start = async () =>{

    try{
        app.listen(PORT , ()=>{
            console.log(`server started at ${PORT} port`);
        });
    }
    catch(err){
        console.log(err);
    }

}

start();