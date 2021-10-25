import {HANDLE_ADD_MESSAGE_TO_CHAT, SET_CURRENT_CHAT, ADD_CHAT, DELETE_CHAT} from './types';

export const handleAddMessageToChat = (message) => ({
    type: HANDLE_ADD_MESSAGE_TO_CHAT,
    payload: message
})

export const setCurrentChat = (chatId) => ({
    type: SET_CURRENT_CHAT,
    payload: chatId
})

export const addChat = (chatId) => ({
    type: ADD_CHAT,
    payload: chatId
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId
})