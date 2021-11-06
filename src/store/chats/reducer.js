import {
    HANDLE_ADD_MESSAGE_TO_CHAT,
    ADD_CHAT,
    DELETE_CHAT,
    HANDLE_ADD_NEW_CHAT,
    HANDLE_CHANGE_MESSAGE,
    HANDLE_DELETE_MESSAGE,
    GET_CHATS_SUCCESS,
    GET_CHATS_ERROR,
    GET_CHATS_START,
    ADD_NEW_CHAT_SUCCESS, ADD_NEW_MESSAGE_TO_CHAT_SUCCESS,
} from "./types";
import {nanoid} from 'nanoid'
import {format} from 'date-fns'
import {addNewChat, getAllChatsApi, getLastChatIdApi, addNewChatApi} from "../../api/v1/chats/chats";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getChats} from './thunks';

const initialState = {
    chats: {},
    // chats: {
    //     chat1: { name: 'Chat 1'},
    //     chat2: {name: 'Chat 2'}
    // },
    chatsError: false,
    chatsSuccess: false,
    message: '',
    newChatName: '',
    lastChatId: ''
}

export const ChatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_ADD_MESSAGE_TO_CHAT:
            if (action.payload.message === '') {
                return {...state, message: ''}
            }
            return {
                ...state, chats: {
                    ...state.chats,
                    [action.payload.chatId]: {
                        ...state.chats[action.payload.chatId],
                        messages: [
                            ...state.chats[action.payload.chatId].messages, {
                                id: nanoid(),
                                message: action.payload.message,
                                author: action.payload.author,
                                date: format(new Date(), 'dd:MM:yyyy HH:mm:ss')
                            }
                        ]
                    }
                },
                message: ''
            };
        case HANDLE_CHANGE_MESSAGE:
            return {
                ...state, message: action.payload
            }
        case ADD_CHAT:
            if (action.payload === '') {
                return state;
            }
            addNewChat(action.payload);
            // return {
            //     ...state, chats: {
            //         ...state.chats, [nanoid()]: {name: action.payload, messages: []}
            //     },
            //     newChatName: ''
            // }
            return state;
        case DELETE_CHAT:
            let newChats = {...state.chats};
            delete newChats[action.payload];
            return {
                ...state, chats: {...newChats}
            }
        case HANDLE_ADD_NEW_CHAT:
            if (action.payload === '') {
                return state;
            }
            return {
                ...state, newChatName: action.payload
            }
        case HANDLE_DELETE_MESSAGE:
            let chat = {...state.chats[action.payload.chatId]};
            const newMessages = chat.messages.filter(item => item.id !== action.payload.messageId);
            return {
                ...state, chats: {
                    ...state.chats,
                    [action.payload.chatId]: {
                        ...state.chats[action.payload.chatId],
                        messages: [...newMessages]
                    }
                },
            };
        case GET_CHATS_START:
            return {...state, chatsPending: true};
        case GET_CHATS_SUCCESS:
            let chats = {};
            action.payload.forEach((snapshot)=>{
                chats = { ...chats, [snapshot.key]: snapshot.val()}
            })
            return {...state, chatsPending: false, chats: [...Object.entries(chats)]};
        case GET_CHATS_ERROR:
            return {...state, chatsPending: false, chatsError: action.payload};
        case ADD_NEW_CHAT_SUCCESS:
            let addChats = {};
            action.payload.forEach((snapshot)=>{
                addChats = { ...addChats, [snapshot.key]: snapshot.val()}
            })
            return {...state, chatsPending: false, chats: [...Object.entries(addChats)]};
        case ADD_NEW_MESSAGE_TO_CHAT_SUCCESS:
            let addMessages = {};
            action.payload.forEach((snapshot)=>{
                addMessages = { ...addMessages, [snapshot.key]: snapshot.val()}
            })
            return {...state, chatsPending: false, chats: [...Object.entries(addMessages)]};
        default:
            return state;
    }
}