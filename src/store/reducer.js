import {INCREMENT, DECREMENT} from "./types";

// const action = { type: "GET USER", payload: {userId:23}}

// const getUser = (userId) = {
// return { type: "GET USER", payload: {userId}}

export const ProfileReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}