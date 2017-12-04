var socket =io();
socket.on('connect',function (){
console.log("connected to client server");

socket.emit('createMessage',{
from:'from@.com',
text:'Hi'
});
});

socket.on('disconnect',function (){
console.log("Disconnected from server");
});

socket.on('newMessageevent',function (email){
console.log("Got new message",email);
});
