import {createStore, applyMiddleware, compose} from "redux";
import {combineReducers} from 'redux';
import {ChatsReducer} from './chats/reducer';
import {GistsReducer} from "./gists";
import {botMessage} from "../middleware/botMessage";
import {crashReporter} from "../middleware/crashReporter";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {getGistsApi, searchGistsByUserNameApi} from "../api/v1/gists";
import {
    getAllChatsApi,
    getChatByIdApi,
    getLastChatIdApi,
    addNewChatApi,
    addNewMessageToChatApi,
    deleteMessageFromChatApi,
    deleteChatByIdApi
} from "../api/v1/chats/chats";
import thunk from "redux-thunk";
import {SessionReducer} from "./session";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [null],
    whitelist: ['ChatsReducer, SessionReducer']
}

const persistreducer = persistReducer(persistConfig, combineReducers({ChatsReducer, GistsReducer, SessionReducer}))

export const store = createStore(persistreducer, compose(applyMiddleware(crashReporter, botMessage, thunk.withExtraArgument({
    getGistsApi,
    searchGistsByUserNameApi,
    getAllChatsApi,
    getChatByIdApi,
    getLastChatIdApi,
    addNewChatApi,
    addNewMessageToChatApi,
    deleteMessageFromChatApi,
    deleteChatByIdApi
})), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export const persistor = persistStore(store);