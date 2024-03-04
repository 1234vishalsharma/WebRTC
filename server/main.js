import {Server} from 'socket.io';

const io = Server(4000)

io.on('connection' ,(socket) =>{
    console.log("Socket Connected",socket.id);
})