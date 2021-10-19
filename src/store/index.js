import React from "react";
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { ProfileReducer } from "./reducer";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';


export * from "./actions";
export * from "./reducer";

export function ProfilePage () {

    const store = createStore(ProfileReducer, {count:0});

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const increment = () => dispatch({type:"INCREMENT"});
    const decrement = () => dispatch({type:"DECREMENT"});

        return (
            <div style={{textAlign: 'center'}}>
                <h1>Count {count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        )
}