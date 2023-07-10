import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';
import axios from 'axios'
import { useEffect, useState } from 'react';
function App() {

  const count= useSelector(state=>state.counter.value)
  const dispatch=useDispatch()
  const inc=()=>{
    dispatch(increment())
  }
  const [users,setUser]=useState([])

/*   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUser(res.data))
  }) */
  return (
    <div>
       <button onClick={inc}>+</button>
        {count}
        <button onClick={()=>dispatch(decrement())}>-</button>    
  

{/*       {users&&users.map(e=><h1>{e.name}</h1>)}
 */}        </div>
  );
}

export default App;
