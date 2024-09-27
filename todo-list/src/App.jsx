import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

let API_URL = 'http://localhost:3000/api/data';

function App() {
  let [users,setUsers] = useState([]);
  let newUser = useRef();
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
  let handleAddBtn = () => {
    // alert(newUser.current.value)
    let user = newUser.current.value
    axios.post(API_URL, { name : user })
  .then(function (response) {
    setUsers([...users,response.data]);
    fetchedData();
    // fetchedData();
    // handle success
    // fetchedData()
    // console.log(newUser.current.value)
    // setUsers(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  return (
    <>
    <input
    ref={newUser}
    type="text" placeholder='Enter something...' /> 
    <button 
    onClick={handleAddBtn}
    >ADD</button>
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.name} <span className='ml-5'> <button className='border-2'>Edit</button> <button className='border-2'>Delete</button></span></li>
      ))}
    </ul>
    </>
  )
}

export default App