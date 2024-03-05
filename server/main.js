// import {Server} from 'socket.io';
const Server = require('socket.io')

const io = Server(4000 , {
    cors:true
})

io.on('connection' ,(socket) =>{
    console.log("Socket Connected",socket.id);

    socket.on('room:join' ,(data)=>{
        console.log(data);
    })

})