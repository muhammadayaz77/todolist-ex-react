import React, { useEffect, useState } from 'react'
import axios from 'axios'

let API_URL = 'http://localhost:3000/api/data';

function App() {
  let [users,setUsers] = useState([]);
  useEffect(() => {
  fetchedData()
  },[]);
  let fetchedData = () => {
    axios.get(API_URL)
  .then(function (response) {
    // handle success
    setUsers(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  return (
    <>
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.name} <span className='ml-5'> <button className='border-2'>Edit</button> <button className='border-2'>Delete</button></span></li>
      ))}
    </ul>
    </>
  )
}

export default App