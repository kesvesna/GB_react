import {createStore, applyMiddleware, compose} from "redux";
import {combineReducers} from 'redux';
import {ChatsReducer} from './chats/reducer';
import {ProfileReducer} from './reducer';

export const rootReducer = combineReducers({
    ProfileReducer,
    ChatsReducer
})

export const store = createStore(rootReducer,compose(applyMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

