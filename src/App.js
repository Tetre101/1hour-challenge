import './App.css';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect("http://localhost:8080");

function App() {
const [username, setUsername] = ("");
const [room, setRoom] = ("");

const JoinRoom = ()=>{
if (username !== "" && room !== ""){
  socket.emit("join_room, room")

}
}


  return (
    <div className="App">
      <h2> JOIN A CHAT </h2>
      <input type = "text" placeholder ="peter..." onChange ={(event) =>{
        setUsername(event.target.value);
      }}/>
      <input type = "text" placeholder ="ROOM ID..." onChange ={(event) =>{
        setRoom(event.target.value)
        }}/>
      <button onClick= {JoinRoom}> JOIN A ROOM </button>
      <Chat socket ={socket} usename ={username} room = {room}/>
    </div>
  );
}

export default App;
