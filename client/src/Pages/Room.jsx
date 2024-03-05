import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react'
import { useSocket } from '../Providers/SocketProvider'

const Room = () => {
        // state for user media stream
        const [stream,setStream] = useState();
        const socket = useSocket();
        
        const handelUserJoined = useCallback(({ username , id }) => {
            console.log(username, id);
        });

       useEffect( ()=>{
        socket.on('user:Joined' , handelUserJoined);
        return () => {
            socket.off('user:Joined' , handelUserJoined);
        }
    }, [socket,handelUserJoined]);

  return (
    <div>
      <h1>Room Page</h1>
    </div>
  )
}

export default Room
