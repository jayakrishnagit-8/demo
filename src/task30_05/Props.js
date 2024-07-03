import React from 'react'

export default function Props(p) {
  return (
    <div align="center">
      <h1 style={{color:'blue'}}><i>Application Form</i></h1>    
      <form>
        <p>Name : {p.name}</p>
        <p>Email : {p.mail} </p>
        <p>Phone No : {p.phone}</p>
        <p>City : {p.city}</p>
      </form>
      <button style={{backgroundColor:'green', color:'white'}}>Submit</button>
    </div>
  )
}
