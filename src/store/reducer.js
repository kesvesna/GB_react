import {INCREMENT, DECREMENT} from "./types";

export const ProfileReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "DECREMENT":
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}