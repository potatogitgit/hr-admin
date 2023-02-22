import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import { useState } from 'react'

<script src="/socket.io/socket.io.js" />
const socket = io.connect("https://hr-server.onrender.com")
//const socket = io.connect("http://localhost:5000")


function App() {

  const [msg, setMsg] = useState("")


  const passData = () => {
    //socket.emit("test", { "name": "Pogi", "age": 27 })
    //socket.emit("test", "working")
    socket.emit("test", "hello")

  }

  const passDataTest = (e) => {
    //socket.emit("test", { "name": "Pogi", "age": 27 })
    //socket.emit("test", "working")
    socket.emit("test", msg)

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> Test:</p>
        <input type={"text"} name="message" value={msg} onChange={(e) => setMsg(e.target.value)}></input>
        <button onClick={passData}> Click me </button>
        <button onClick={passDataTest}> Test </button>
      </header>
    </div>
  );
}

export default App;
