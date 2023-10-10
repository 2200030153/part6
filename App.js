import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

export default function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/users").then(
    response=>setData(response.data)
  ).catch(err=>console.log(err))
},[])
  return (
     <div>
      <div className='text-end'><Link to="/add" className="btn btn-primary">Add+ </Link> </div> 
      <br></br>
      <br></br>
      <table border='3'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
      
      {data.map(item=> 
       <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        </tr> )}
      </table>
    </div>
  );
}


