import React, { useEffect, useState } from 'react'

export default function Sqrt() {
  const[count,setCount]=useState(1)
    function abc(){
        setCount(count*5)
    }
    useEffect(()=>
        console.log("Event called")
    )
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'blue'}}>Welcome to React App <span style={{fontSize:"18px",fontWeight:200,color:'gray'}}>(Functional Component)</span></h1>
      <h4 style={{color:'green'}}>Result = {count}</h4>
      <button onClick={abc}>Click</button><br /><br /><br />
      <footer style={{backgroundColor:'black',color:'white',padding:'20px'}}>&copy; 2024 All Rights Reserved</footer>
    </div>
  )
}
