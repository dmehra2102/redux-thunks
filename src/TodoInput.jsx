import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { getTodos, get_todo_failure } from './Redux/action';

function TodoInput() {
    const dispatch = useDispatch();
    const [info,setInfo] = useState("");
    const handlesubmit = ()=>{
        const payload = {
            title : info,
            status : "Not Completed"
        };
        axios.post("http://localhost:8080/todos",payload)
        .then(()=> dispatch(getTodos()))
        .catch(()=>dispatch(get_todo_failure()));
    }
   
  return (
    <div>
        <input type="text" placeholder='Write your todo...' onChange={(e)=> setInfo(e.target.value)}/>
        <button onClick={handlesubmit}>Add</button>
    </div>
  )
}

export default TodoInput