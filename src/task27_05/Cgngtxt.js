import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [text,setname] = useState("The Popular Library of JavaScript is :");
  function changetext() {
    setname("The Popular Library of JavaScript is : React JS");
  }
  return (
    <div className="App">
      <h1>
        {text}
      </h1>
      <button onClick={changetext}>
        Show
      </button>
    </div>
  );
}

export default App;
