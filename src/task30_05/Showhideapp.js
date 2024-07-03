import { useState } from 'react';
import './App.css';



function App() {

  const [message,setMessage] = useState("Open Screct Message");

  function show() {
    setMessage("The Password is : 8811")
  }
  function hide() {
    setMessage(null)
  }

  return (
    <div align="center">
      <h1>
        {message}
      </h1>
      <button onClick={show}>Show</button> &nbsp;&nbsp;
      <button onClick={hide}>Hide</button>
    </div>
  );
}

export default App;
