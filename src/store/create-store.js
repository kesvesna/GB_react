import {createStore} from "redux";
import {combineReducers} from 'redux';
import {ChatsReducer} from './chats/reducer';
import {ProfileReducer} from './reducer';

export const rootReducer = combineReducers({
    ProfileReducer,
    ChatsReducer
})

export const store = createStore(rootReducer);

