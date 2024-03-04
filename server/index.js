const express = require('express');
const PORT = 8000;
const server = express();

server.get('/',(req,res)=>{
    res.send("Response send")
})


server.listen(PORT , ()=>{
    console.log("Server start and ready to listen user request");
});

