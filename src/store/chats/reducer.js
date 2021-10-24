import {HANDLE_ADD_MESSAGE_TO_CHAT} from "./types";

const initialState = {
    chats: {
        id1: {
            name: 'Chat 1', messages: [
                {id: 1, author: 'User', message: 'Message 1', date: new Date()},
                {id: 2, author: 'Bot', message: 'Message 1', date: new Date()},
                {id: 3, author: 'User', message: 'Message 2', date: new Date()},
                {id: 4, author: 'Bot', message: 'Message 2', date: new Date()}
            ]
        },
        id2: {
            name: 'Chat 2', messages: [
                {id: 1, author: 'User', message: 'Message 3', date: new Date()},
                {id: 2, author: 'Bot', message: 'Message 3', date: new Date()},
                {id: 3, author: 'User', message: 'Message 4', date: new Date()},
                {id: 4, author: 'Bot', message: 'Message 4', date: new Date()}
            ]
        },
        id3: {
            name: 'Chat 3', messages: [
                {id: 1, author: 'User', message: 'Message 5', date: new Date()},
                {id: 2, author: 'Bot', message: 'Message 5', date: new Date()},
                {id: 3, author: 'User', message: 'Message 6', date: new Date()},
                {id: 4, author: 'Bot', message: 'Message 6', date: new Date()}
            ]
        },
    }
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_ADD_MESSAGE_TO_CHAT:
            return {
                ...state, chats: Object.keys(state.chats).map(chat => {
                    return chat === action.payload.currentChat ? {
                        ...chat, messages: [{
                            id: 7,
                            author: 'User',
                            message: action.payload.message,
                            date: new Date(),
                        }]
                    } : chat
                })
            };
        default:
            return state;
    }
}