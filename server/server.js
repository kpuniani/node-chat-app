const path = require('path');
const http = require('http');
const express =require('express');
const socketIO = require('socket.io');

const publicPath= path.join(__dirname +'/../public');

const  port =process.env.PORT || 3000;
var app =express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log("New user connected");

  /*socket.emit('newEmail',{
    from :'abc@abc.com',
    text:'Hey,what  is going on.',
    createdAt:123
  });*/
  socket.emit('newMessageevent',{
    from :'message@abc.com',
    text:'Hey,what is going on,How are you?',
    createdAt:123

  });

  socket.on('createMessage',(newMessage)=>{
  console.log("Email created",newMessage);
  });

  socket.on('disconnect',()=>{
    console.log("User disconnected");
  });
});

server.listen(3000,()=>{
  console.log(`Server is listening to port ${port}`);
});
