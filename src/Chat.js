import React from 'react'
import { useState } from 'react'

function Chat({socket, username, room}){

    const [currentMessage, setCurrentMessage] = useState("");

    const messageBox = async()=>{
        if (currentMessage !== ""){
            const messageDetails ={
                room: room,
                sender: username,
                message:currentMessage,
                time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            };

await socket.emit('send_message',messageDetails );

        }
    };
  return (
    <div>
        <div>
            <p> LIVE CHAT</p>
        </div>
        <div></div>
        <div> 
            <input type = 'text' placeholder = "typing" onChange ={(event) =>{
        setCurrentMessage(event.target.value);
      }}/>
            <button>&#9658;</button>
        </div>
        </div>
  )
}

export default Chat
