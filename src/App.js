import React from "react"; // Import React library
import logo from "./logo.svg"; // Import logo image
import "./App.css"; // Import CSS file

function App() {
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
        {/* Add your link to home.html here */}
        <a href="home.html" className="App-link">
          Go to Home Page
        </a>
      </header>
    </div>
  );
}

export default App;
