import {
    getChatsError,
    getChatsStart,
    getChatsSuccess,
    getChatByIdError,
    getChatByIdStart,
    getChatByIdSuccess,
    getLastChatId,
    addNewChatSuccess,
    addNewMessageToChatSuccess,
    deleteMessageFromChatSuccess
} from './actions';

export const getChats = () => async (dispatch, _, api) => {
    try {
        dispatch(getChatsStart());
        const data = await api.getAllChatsApi();
        let chats = {};
        data.forEach((snapshot) => {
            chats = {...chats, [snapshot.key]: snapshot.val()}
        })
        dispatch(getChatsSuccess(chats));
    } catch {
        dispatch(getChatsError("Get chats from db error"));
    }
}

export const addNewChat = (newChatName = 'default name') => async (dispatch, _, api) => {
    await api.addNewChatApi(newChatName);
    const data = await api.getAllChatsApi();
    dispatch(addNewChatSuccess(data));
}

export const getChatById = (chatId = '') => async (dispatch, _, api) => {
    try {
        dispatch(getChatByIdStart());
        const {data} = await api.getChatByIdApi(chatId);
        dispatch(getChatByIdSuccess(data));
    } catch {
        dispatch(getChatByIdError("Get chat by id from db error"));
    }
}

export const lastChatId = () => async (dispatch, _, api) => {
    try {
        dispatch(getLastChatId());
        const {data} = await api.getLastChatIdApi();
    } catch {

    }
}

export const addNewMessageToChat = (message, chatId, author) => async (dispatch, _, api) => {
    if (message !== '') {
        await api.addNewMessageToChatApi(message, chatId, author);
    }
    const data = await api.getAllChatsApi();
    dispatch(addNewMessageToChatSuccess(data, chatId, author, message));
}

export const deleteMessageFromChat = (chatId, messageId) => async (dispatch, _, api) => {
    await api.deleteMessageFromChatApi(chatId, messageId);
    const data = await api.getAllChatsApi();
    dispatch(deleteMessageFromChatSuccess(data, chatId, messageId));
}

export const deleteChat = (chatId) => async (dispatch, _, api) => {
    await api.deleteChatByIdApi(chatId);
    const data = await api.getAllChatsApi();
    dispatch(deleteMessageFromChatSuccess(data, chatId));
}