import {createStore, applyMiddleware, compose} from "redux";
import {combineReducers} from 'redux';
import {ChatsReducer} from './chats/reducer';
import {botMessage} from "../middleware/botMessage";
import {crashReporter} from "../middleware/crashReporter";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
    blacklist: [null],
    whitelist: ['ChatsReducer']
}

const persistreducer = persistReducer(persistConfig, combineReducers({ChatsReducer}))

export const store = createStore(persistreducer, compose(applyMiddleware(crashReporter, botMessage), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export const persistor = persistStore(store);