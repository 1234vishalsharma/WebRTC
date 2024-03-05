// import {Server} from 'socket.io';
const Server = require('socket.io')
const userNameToSocketMap = new Map();
const socketToUserNameMap = new Map();


const io = Server(4000 , {
    cors:true
})

io.on('connection' ,(socket) =>{
    console.log("Socket Connected",socket.id);

    socket.on('room:join' ,(data)=>{
        const {username,room} = data;
        userNameToSocketMap.set(username , socket.id);
        socketToUserNameMap.set(socket.id,username);
        

        io.to(room).emit('user:Joined' , {username , id : socket.id })
        socket.join(room);


        io.to(socket.id).emit("room:join" ,data)
    });

});