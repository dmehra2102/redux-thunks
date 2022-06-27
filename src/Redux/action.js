import axios from "axios";
import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actiontypes";

export const get_todo_success = (data)=>{
    return {
        type : GET_TODOS_SUCCESS,
        payload : data
    }
};

export const get_todo_request = ()=>{
    return {
        type : GET_TODOS_REQUEST
    }
};

export const get_todo_failure = ()=> {
    return {
        type : GET_TODOS_FAILURE
    }
};

export const getTodos = ()=>(dispatch)=>{
    dispatch(get_todo_request());

    axios.get("http://localhost:8080/todos")
    .then((res)=> dispatch(get_todo_success(res.data)))
    .catch(()=> dispatch(get_todo_failure()));
};