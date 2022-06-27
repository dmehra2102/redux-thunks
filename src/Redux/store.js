import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";

const customMiddleware = ({dispatch})=>(next)=>(action)=> {
    if(typeof action === "function"){
        return action(dispatch);
    }
    next(action);
}

export const store = legacy_createStore(reducer,applyMiddleware(customMiddleware));