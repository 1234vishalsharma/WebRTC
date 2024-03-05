import React, { useState } from 'react';
import '../index.css'
import {useSocket} from '../Providers/SocketProvider';
function Lobby() {

  const [username,setUsername] = useState();
  const [room,setRoom] = useState();
  const socket = useSocket();

  const handelSubmit = (e) => {
    e.preventDefault();
    socket.emit("room:join" , {
      username , room
    })
  }


  return (
    <div className='flex flex-col gap-4 mt-8'>
      <h1 className='text-3xl font-bold'>Lobby</h1>
      <form className='flex flex-col gap-4 justify-center items-center' onSubmit={handelSubmit}>
        
        <div className='flex gap-7 justify-center items-center'>
          <label className='text-lg'>Enter Room ID:</label> 
          <input className='border-2 p-2 w-64' placeholder='123456' type="text" onChange={(e) => setRoom(e.target.value)}/>
        </div>

        <div className='flex gap-3  justify-center items-center'>
          <label className='text-lg' >Enter Username : </label>
          <input className='border-2 p-2 w-64' placeholder='Username' type="text" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <input type="submit" className='border bg-green-500 p-2 rounded-md text-white border-black cursor-pointer focus:ring-2 ' />
      </form>
    </div>
  )
}

export default Lobby
