const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection',(socket)=>{
    //  socket.broadcast.emit('message',"hello")
    socket.on("message",(message)=>{
      console.log(message);
    })
    console.log("A user connected");
})

server.listen(8000,()=>{
  console.log(`Server starts at 8000`);
})