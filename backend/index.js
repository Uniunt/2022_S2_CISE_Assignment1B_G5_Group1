const express = require("express");

const server = express;

server.length('/',(req,res) =>{
    res.send("API running")
})

server.listen(8082, console.log("prot is ok, on PROT 8082"));

