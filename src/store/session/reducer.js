import {GET_SESSION_ERROR, GET_SESSION_SUCCESS} from "./types";

const initialState = {
    session: null,
}

export const SessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SESSION_SUCCESS:
            //console.log('session', action.payload.User.email);
            return {...state, session: action.payload};
        case GET_SESSION_ERROR:
            return {...state, session: null};
        default:
            return state;
    }
}