import { GET_TODOS_FAILURE,GET_TODOS_SUCCESS,GET_TODOS_REQUEST } from "./actiontypes";
const init = {
    todos : [],
    isLoading : false,
    isError : false
};

export const reducer = (state=init,{type,payload})=> {
    switch (type) {
        case GET_TODOS_REQUEST:
            return {...state,isLoading : true};
        case GET_TODOS_SUCCESS:
            return {...state,todos : payload};
        case GET_TODOS_FAILURE:
            return {...state,isError: true};
        default:
            return state;
    }
}