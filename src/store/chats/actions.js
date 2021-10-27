import {
    HANDLE_ADD_MESSAGE_TO_CHAT,
    SET_CURRENT_CHAT,
    ADD_CHAT,
    DELETE_CHAT,
    HANDLE_ADD_NEW_CHAT,
    HANDLE_CHANGE_MESSAGE
} from './types';

export const handleAddMessageToChat = (message, chatId) => ({
    type: HANDLE_ADD_MESSAGE_TO_CHAT,
    payload: {message, chatId}
})

export const handleChangeMessage = (message) => ({
    type: HANDLE_CHANGE_MESSAGE,
    payload: message
})

export const addChat = (chatId) => ({
    type: ADD_CHAT,
    payload: chatId
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId
})

export const handleAddNewChat = (newChatName) => ({
    type: HANDLE_ADD_NEW_CHAT,
    payload: newChatName
})