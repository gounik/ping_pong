const fs = require('fs')
const socketio = require('socket.io')
const express = require('express');  
const app = express();  
const server = app.listen('3000',(req,res)=>{

console.log('listening to port 3000')

})

var io = socketio(server);
app.get('/',(req,res)=>{
    res.setHeader('content_type','text/html');
    res.write(fs.readFileSync(__dirname + "/page1.html"))
    res.end();
})
io.on('connection',(socket)=>{
    console.log("a user connected with id "+socket.id)
})
 


