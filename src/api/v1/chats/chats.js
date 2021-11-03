import {firebaseDb} from '../firebase/firebase';
import {nanoid} from "nanoid";

export const sendAllChatsApi = (chats) => firebaseDb.ref('chats').push(chats);

export const getAllChatsApi = () => firebaseDb.ref('chats').get();

// export const addChatApi = (chatName) => firebaseDb.ref('chats').push({...chats, [nanoid()]: {
//     chatName: chatName,
//         messages: []
//     }});
//
// export const addMessageToChatApi = (message, chatId) => firebaseDb.ref('chats').child(chatId).push({...message, id: nanoid()});
//
// export const deleteMessageFromChatApi = (messageId, chatId) => firebaseDb.ref('chats').get();
//
// export const deleteChatApi = (chatId) => firebaseDb.ref('chats').get();

