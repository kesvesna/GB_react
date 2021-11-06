import {
    HANDLE_ADD_NEW_CHAT,
    HANDLE_CHANGE_MESSAGE,
    GET_CHATS_SUCCESS,
    GET_CHATS_ERROR,
    GET_CHATS_START,
    ADD_NEW_CHAT_SUCCESS,
    ADD_NEW_MESSAGE_TO_CHAT_SUCCESS,
    DELETE_MESSAGE_FROM_CHAT_SUCCESS,
    DELETE_CHAT_SUCCESS
} from "./types";


const initialState = {
    chats: {},
    chatsError: false,
    chatsSuccess: false,
    message: '',
    newChatName: '',
    lastChatId: ''
}

export const ChatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_CHANGE_MESSAGE:
            return {
                ...state, message: action.payload
            }
        case HANDLE_ADD_NEW_CHAT:
            if (action.payload === '') {
                return state;
            }
            return {
                ...state, newChatName: action.payload
            }
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
            action.payload.chats.forEach((snapshot)=>{
                addMessages = { ...addMessages, [snapshot.key]: snapshot.val()}
            })
            return {...state, chatsPending: false, chats: [...Object.entries(addMessages)]};
        case DELETE_MESSAGE_FROM_CHAT_SUCCESS:
            let deleteMessages = {};
            action.payload.chats.forEach((snapshot)=>{
                deleteMessages = { ...deleteMessages, [snapshot.key]: snapshot.val()}
            })
            return {...state, chatsPending: false, chats: [...Object.entries(deleteMessages)]};
        case DELETE_CHAT_SUCCESS:
            let deleteChat = {};
            action.payload.chats.forEach((snapshot)=>{
                deleteChat = { ...deleteChat, [snapshot.key]: snapshot.val()}
            })
            return {...state, chatsPending: false, chats: [...Object.entries(deleteChat)]};
        default:
            return state;
    }
}