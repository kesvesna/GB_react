import {createStore} from "redux";
import {INCREMENT, DECREMENT} from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

export const store = createStore(reducer, {count: 0});

