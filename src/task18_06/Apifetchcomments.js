import React, { useEffect, useState } from 'react'

export default function Apifetchcomments() {

    const[data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments").then((j)=>{
            j.json().then((response)=>{
                setData(response)
            })
        })
    })

  return (
    <div align="center" style={{backgroundColor:'light blue'}}>
        <h1 style={{color:"blue"}}>
            Comments List
        </h1>
      <table border="2" cellpadding="10">
        <tr>
            <th>Post ID</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
        </tr>
        {
            data.map((k)=>
            <tr>
                <td>{k.postId}</td>
                <td>{k.id}</td>
                <td>{k.name}</td>
                <td>{k.email}</td>
                <td>{k.body}</td>
            </tr>
            )
        }
      </table>
    </div>
  )
}
