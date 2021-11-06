import {
    HANDLE_ADD_NEW_CHAT,
    HANDLE_CHANGE_MESSAGE,
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
    DELETE_CHAT_SUCCESS,
    DELETE_MESSAGE_FROM_CHAT_SUCCESS,
    GET_LAST_CHAT_ID
} from './types';


export const handleChangeMessage = (message) => ({
    type: HANDLE_CHANGE_MESSAGE,
    payload: message
})


export const handleAddNewChat = (newChatName) => ({
    type: HANDLE_ADD_NEW_CHAT,
    payload: newChatName
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
export const addNewMessageToChatSuccess = (chats, chatId, author, message) => ({
    type: ADD_NEW_MESSAGE_TO_CHAT_SUCCESS,
    payload: {chats, chatId, author, message}
});
export const addNewMessageToChatError = (error) => ({
    type: ADD_NEW_MESSAGE_TO_CHAT_ERROR,
    payload: error
});
export const deleteMessageFromChatSuccess = (chats, chatId, messageId) => ({
    type: DELETE_MESSAGE_FROM_CHAT_SUCCESS,
    payload: {chats, chatId, messageId}
});
export const deleteChatSuccess = (chats, chatId) => ({
    type: DELETE_MESSAGE_FROM_CHAT_SUCCESS,
    payload: {chats, chatId}
});

