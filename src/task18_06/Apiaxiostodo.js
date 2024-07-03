import React, { useEffect,useState } from 'react'
import axios from 'axios';

export default function Apiaxiostodo() {

    
    const[data, setData]=useState([]);

    const abc=()=>
        {
          axios.get("https://jsonplaceholder.typicode.com/todos")
          .then(response => {
          setData(response.data);
          })
        }
    useEffect(()=>{
        abc();
    });

  return (
    <div align="center" style={{backgroundColor:'yellow'}}>
        <h1 style={{color:"blue"}}>
            Todos List
        </h1>
      <table border="2" cellpadding="10">
        <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
        </tr>
        {
            data.map((k)=>
            <tr>
                <td>{k.userId}</td>
                <td>{k.id}</td>
                <td>{k.title}</td>
            </tr>
            )
        }
      </table>
    </div>
  )
}
