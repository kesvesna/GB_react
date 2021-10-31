import {
    HANDLE_ADD_MESSAGE_TO_CHAT,
    ADD_CHAT,
    DELETE_CHAT,
    HANDLE_ADD_NEW_CHAT,
    HANDLE_CHANGE_MESSAGE,
    HANDLE_DELETE_MESSAGE
} from "./types";
import {nanoid} from 'nanoid'
import {format} from 'date-fns'

const initialState = {
    chats: {
        [nanoid()]: {
            name: 'Chat 1', messages: [
                {id: nanoid(), author: 'User', message: 'Message 1', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 1', date: new Date()},
                {id: nanoid(), author: 'User', message: 'Message 2', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 2', date: new Date()}
            ]
        },
        [nanoid()]: {
            name: 'Chat 2', messages: [
                {id: nanoid(), author: 'User', message: 'Message 3', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 3', date: new Date()},
                {id: nanoid(), author: 'User', message: 'Message 4', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 4', date: new Date()}
            ]
        },
        [nanoid()]: {
            name: 'Chat 3', messages: [
                {id: nanoid(), author: 'User', message: 'Message 5', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 5', date: new Date()},
                {id: nanoid(), author: 'User', message: 'Message 6', date: new Date()},
                {id: nanoid(), author: 'Bot', message: 'Message 6', date: new Date()}
            ]
        },
    },
    message: '',
    newChatName: ''
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
            return {
                ...state, chats: {
                    ...state.chats, [nanoid()]: {name: action.payload, messages: []}
                },
                newChatName: ''
            }
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
        default:
            return state;
    }
}