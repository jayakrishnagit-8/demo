// import React from 'react'
import React, { useEffect, useState } from 'react'

export default function Apifetch() {

    const [main,main2] = useState([])

    useEffect (()=>{
      fetch("https://api.escuelajs.co/api/v1/categories").then((e) =>{
        e.json().then((response)=>{
          main2(response);
        })
      })
    })

  return (
    <div align="center" style={{backgroundColor:'pink'}}>
        <table border='2' cellPadding='15'>
          <tr style={{backgroundColor:"blue",color:'white'}}>
            <th style={{backgroundColor:"red",color:'white'}}>ID</th>
            <th style={{backgroundColor:"green",color:'white'}}>Name</th>
            <th>Images</th>
          </tr>
          {
            main.map((a)=>
              <tr style={{backgroundColor:"lightgreen",color:"white"}}>
                <td style={{backgroundColor:"gray",color:"white"}}>{a.id}</td>
                <td>{a.name}</td>
               
                <td><img src={a.image} width="100" /></td>
              </tr>
            )
        }
        </table>
    </div>
  )
}
