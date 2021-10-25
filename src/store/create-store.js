import {createStore} from "redux";
import {INCREMENT, DECREMENT} from "./types";

import {combineReducers} from 'redux';
import {chatsReducer} from './chats/reducer';

const reducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    reducer,
    chatsReducer
})

export const store = createStore(rootReducer);