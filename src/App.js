import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

<script src="http://localhost:3007/socket.io/socket.io.js" />
const socket = io.connect("http://localhost:5000")
function App() {


  const passData = () => {
    socket.emit("test", { "name": "Pogi", "age": 27 })
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
        <button onClick={passData}> Test </button>
      </header>
    </div>
  );
}

export default App;
