import {INCREMENT, DECREMENT} from "./types";

export const setIncrement = () => {
    return {type: INCREMENT};
}

export const setDecrement = () => {
    return {type: DECREMENT};
}