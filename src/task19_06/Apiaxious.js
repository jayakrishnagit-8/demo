import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Apiaxious() {
    const [data, setData] = useState([]);

    // Function to fetch data using Axios
    const fetchData = async () => {
        try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setData(response.data);
        } 
        catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    // Call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div>
      <h2>Posts:</h2>
      <table border='2' cellPadding='10'>
        <tr>
          <th>Product Name</th>
          <th>Image</th>
        </tr>
        {data.map((post) => (
         <tr>
          <td>{post.title}</td>
          <td>
            <img src={post.images} width="100" />
          </td>
         </tr>
        ))}
      </table>
    </div>
  )
}
