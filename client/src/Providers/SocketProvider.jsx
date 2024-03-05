import React, { createContext , useMemo } from 'react'
import { useContext } from 'react';
import {io} from 'socket.io-client';

const socketContext = createContext(null);

export const useSocket =  () =>{

    return useContext(socketContext);

}
export const SocketProvider = (props) => {
    
    const socket = useMemo( () => io("localhost:4000") , []);

  return (
    <div>
        <socketContext.Provider value={socket}>
            {props.children}
        </socketContext.Provider>
    </div>
  )

}
