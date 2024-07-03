import { useState } from 'react';
import './App.css';



function App() {
  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [phone,setPhone] = useState(null);
  const [pincode,setPincode] = useState(null);

  function submit() {
    document.write(name+"<br>"+email+"<br>"+phone+"<br>"+pincode)
  }
  function aname(inp) {
    setName(inp.target.value);
  }
  function aemail(inp) {
    setEmail(inp.target.value);
  }
  function aphone(inp) {
    setPhone(inp.target.value);
  }
  function apincode(inp) {
    setPincode(inp.target.value);
  }

  return (
    <div align="center">
      <form onSubmit={submit}>
        <h1 style={{color:'blue'}}><i>Application Form</i></h1>
        <label>Name: </label>
        <input type='text' onChange={aname} pattern='[a-zA-Z]{3,50}' placeholder='Enter Your Name' required/>
        <br /> <br />
        <label>Email: </label> 
        <input type='email' onChange={aemail} placeholder='abc@gmail.com' required/>
        <br /> <br />
        <label>Phone: </label>
        <input type='text' onChange={aphone} pattern='[0-9]{10}' title='Enter only ten digits' placeholder='1234567890' required/>
        <br /> <br />
        <label>Pincode: </label>
        <input type='text' onChange={apincode} pattern='[0-9]{6}' title='Enter only six digits' placeholder='000000' required/>
        <br /> <br />
        <label>Country: </label>
        <select>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Mumbai</option>
          <option>Kolkatha</option>
          <option>Chennai</option>
          <option>Delhi</option>
        </select>
        <br /> <br />
        <button style={{backgroundColor:'green', color:'white'}}>Submit</button>
      </form>
    </div>
  );
}

export default App;
