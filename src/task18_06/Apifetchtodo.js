import React, { useEffect, useState } from 'react'

export default function Apifetchtodo() {

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((j)=>{
            j.json().then((response)=>{
                setData(response)
            })
        })
    })

  return (
    <div align="center" style={{backgroundColor:'gray'}}>
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
