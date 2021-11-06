import {firebaseDb} from '../firebase/firebase';

export const getLastChatIdApi = () => firebaseDb.ref('chats').limitToLast(1).get();

export const addNewChat = (newChat) => firebaseDb.ref('chats').push({name: newChat});

export const getAllChatsApi = () => firebaseDb.ref('chats').get();

export const getChatByIdApi = (chatId) => firebaseDb.ref(`chats/${chatId}`).get();

export const addNewChatApi = (newChatName) => firebaseDb.ref('chats').push({name: newChatName});

export const deleteChatByIdApi = (chatId) => firebaseDb.ref(`chats/${chatId}`).remove();

export const addNewMessageToChatApi = (message, chatId, author) => firebaseDb.ref(`chats/${chatId}/messages`).push({message: message, author: author});

export const deleteMessageFromChatApi = (messageId, chatId) => firebaseDb.ref(`chats/${chatId}/${messageId}`).remove();



