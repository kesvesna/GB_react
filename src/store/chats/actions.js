import {
    HANDLE_ADD_MESSAGE_TO_CHAT,
    DELETE_CHAT,
    HANDLE_ADD_NEW_CHAT,
    HANDLE_CHANGE_MESSAGE,
    HANDLE_DELETE_MESSAGE,
    GET_CHATS_START,
    GET_CHATS_ERROR,
    GET_CHATS_SUCCESS,
    GET_CHAT_BY_ID_ERROR,
    GET_CHAT_BY_ID_START,
    GET_CHAT_BY_ID_SUCCESS,
    ADD_NEW_CHAT_SUCCESS,
    ADD_NEW_MESSAGE_TO_CHAT_ERROR,
    ADD_NEW_MESSAGE_TO_CHAT_START,
    ADD_NEW_MESSAGE_TO_CHAT_SUCCESS,
    DELETE_CHAT_ERROR,
    DELETE_CHAT_START,
    DELETE_CHAT_SUCCESS,
    DELETE_MESSAGE_FROM_CHAT_ERROR,
    DELETE_MESSAGE_FROM_CHAT_START,
    DELETE_MESSAGE_FROM_CHAT_SUCCESS,
    GET_LAST_CHAT_ID
} from './types';
import {GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS} from "../gists/types";

export const handleAddMessageToChat = (message, chatId, author) => ({
    type: HANDLE_ADD_MESSAGE_TO_CHAT,
    payload: {message, chatId, author}
})

export const handleChangeMessage = (message) => ({
    type: HANDLE_CHANGE_MESSAGE,
    payload: message
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId
})

export const handleAddNewChat = (newChatName) => ({
    type: HANDLE_ADD_NEW_CHAT,
    payload: newChatName
})

export const handleDeleteMessage = (chatId, messageId) => ({
    type: HANDLE_DELETE_MESSAGE,
    payload: {
        chatId, messageId
    }
})

//==========================================
// Work with firebase
//==========================================

// Get all chats form db
export const getChatsStart = () => ({
    type: GET_CHATS_START
});
export const getChatsSuccess = (chats) => (
    {
    type: GET_CHATS_SUCCESS,
    payload: chats
});
export const getChatsError = (error) => ({
    type: GET_CHATS_ERROR,
    payload: error
});

// Add new chat
export const addNewChatSuccess = (newChatName) => (
    {
        type: ADD_NEW_CHAT_SUCCESS,
        payload: newChatName
    });


export const getLastChatId = (lastChatId) => ({
    type: GET_LAST_CHAT_ID,
    payload: lastChatId,
})

// Get chat by id from db
export const getChatByIdStart = () => ({
    type: GET_CHAT_BY_ID_START
});
export const getChatByIdSuccess = (chats) => ({
    type: GET_CHAT_BY_ID_SUCCESS,
    payload: chats
});
export const getChatByIdError = (error) => ({
    type: GET_CHAT_BY_ID_ERROR,
    payload: error
});

// Add new message to chat in db
export const addNewMessageToChatStart = () => ({
    type: ADD_NEW_MESSAGE_TO_CHAT_START
});
export const addNewMessageToChatSuccess = (chats) => ({
    type: ADD_NEW_MESSAGE_TO_CHAT_SUCCESS,
    payload: chats
});
export const addNewMessageToChatError = (error) => ({
    type: ADD_NEW_MESSAGE_TO_CHAT_ERROR,
    payload: error
});

