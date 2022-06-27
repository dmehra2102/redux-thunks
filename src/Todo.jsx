import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { getTodos } from './Redux/action';
import TodoList from './TodoList';

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todos);
    useEffect(()=>{
        dispatch(getTodos());
    },[]);
  return (
    <div>
        {todos.map((item,index)=> {
            return <TodoList item={item} index={index} key={index}/>
        })}
    </div>
  )
}

export default Todo