import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

<script src="/socket.io/socket.io.js" />
const socket = io.connect("https://hr-admin-xi.vercel.app")
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
        <button onClick={passData}> Click me </button>
      </header>
    </div>
  );
}

export default App;
