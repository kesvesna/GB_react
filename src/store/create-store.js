import {createStore, applyMiddleware, compose} from "redux";
import {combineReducers} from 'redux';
import {ChatsReducer} from './chats/reducer';
import {GistsReducer} from "./gists";
import {botMessage} from "../middleware/botMessage";
import {crashReporter} from "../middleware/crashReporter";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {getGistsApi, searchGistsByUserNameApi} from "../api/v1/gists";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [null],
    whitelist: ['ChatsReducer']
}

const persistreducer = persistReducer(persistConfig, combineReducers({ChatsReducer, GistsReducer}))

export const store = createStore(persistreducer, compose(applyMiddleware(crashReporter, botMessage, thunk.withExtraArgument({
    getGistsApi,
    searchGistsByUserNameApi
})), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export const persistor = persistStore(store);