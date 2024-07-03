import { useState } from 'react';
import './App.css';



function App() {

  const [disname,setDisname] = useState(null);
  const [dismail,setDismail] = useState(null);

  function name(inp) {
    setDisname(inp.target.value);
  }
  function mail(inp) {
    setDismail(inp.target.value);
  }

  return (
    <div align="center">
      <form>
        <h1><i>Application Form</i></h1>
        <label>Name: </label>
        <input onChange={name} type='text'/>
        <br /> <br />
        <label>Email: </label> 
        <input onChange={mail} type='email'/>
        <br /><br />
        {disname} 
        <br /><br />
        {dismail}
      </form>
    </div>
  );
}

export default App;
