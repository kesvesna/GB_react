import {
    HANDLE_ADD_MESSAGE_TO_CHAT,
    SET_CURRENT_CHAT,
    ADD_CHAT,
    DELETE_CHAT,
    HANDLE_ADD_NEW_CHAT,
    HANDLE_CHANGE_MESSAGE
} from "./types";
import { nanoid } from 'nanoid'


const initialState = {
    chats: {
        id1: {
            name: 'Chat 1', messages: [
                {id: nanoid(), author: 'User', message: 'Message 1', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 1', date: new Date()},
                {id: nanoid(), author: 'User', message: 'Message 2', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 2', date: new Date()}
            ]
        },
        id2: {
            name: 'Chat 2', messages: [
                {id: nanoid(), author: 'User', message: 'Message 3', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 3', date: new Date()},
                {id: nanoid(), author: 'User', message: 'Message 4', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 4', date: new Date()}
            ]
        },
        id3: {
            name: 'Chat 3', messages: [
                {id: nanoid(), author: 'User', message: 'Message 5', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 5', date: new Date()},
                {id: nanoid(), author: 'User', message: 'Message 6', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 6', date: new Date()}
            ]
        },
    },
    currentChat: 'Choose chat',
    message: '',
    lastMessage: '',
    newChatName: ''
}

export const ChatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_ADD_MESSAGE_TO_CHAT:
            return {
                ...state, chats: {
                        ...state.chats,
                        [action.payload.chatId]: {
                            ...state.chats[action.payload.chatId],
                            messages: [
                                ...state.chats[action.payload.chatId].messages, {
                                    id: nanoid(),
                                    message: action.payload.message,
                                    author: 'User',
                                    date: new Date()
                                }
                            ]
                        }
                }
            };
        case HANDLE_CHANGE_MESSAGE:
            return {
                ...state, message: action.payload
            }
        case SET_CURRENT_CHAT:
            return {
                ...state, currentChat: action.payload
            };
        case ADD_CHAT:
            let lastChatId = Object.keys(state.chats)[Object.keys(state.chats).length - 1];
            if (lastChatId !== undefined) {
                lastChatId = 'id' + (parseInt(lastChatId.substr(2)) + 1);
            } else {
                lastChatId = 'id1';
            }
            return {
                ...state, chats:{
                    ...state.chats, [lastChatId]: {name: action.payload, messages: []}
                }
            }
        case DELETE_CHAT:
            let newChats = {...state.chats};
            delete newChats[action.payload];
            return  {
                ...state, chats: {...newChats}
            }
        case HANDLE_ADD_NEW_CHAT:
            return  {
                ...state, newChatName: action.payload
            }
        default:
            return state;
    }
}