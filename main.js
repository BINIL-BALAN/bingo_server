require('dotenv').config();
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new Server(server)
const PORT = process.env.PORT || 8000
io.on('connection',(socket)=>{
    socket.on("joinRoom",({room,message})=>{
      console.log("roomName----->",room);
      
      socket.join(room)
      socket.emit("message",`response form server ( ${room} )`)
    })
    socket.on("message",({room,message})=>{
      io.to(room).emit("message",`message in room ${message}`)
    })
    console.log("A user connected");
})

server.listen(PORT,()=>{
  console.log(`Server starts at http://localhost:${PORT}`);
})

