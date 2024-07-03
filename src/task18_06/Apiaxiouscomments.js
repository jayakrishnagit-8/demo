import React, { useEffect,useState } from 'react'
import axios from 'axios';


export default function Apiaxiouscomments() {

    const[data, setData]=useState([]);

    const abc=()=>
        {
          axios.get("https://jsonplaceholder.typicode.com/comments")
          .then(response => {
          setData(response.data);
          })
        }
    useEffect(()=>{
        abc();
    });


  return (
    <div align="center" style={{backgroundColor:'pink'}}>
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
