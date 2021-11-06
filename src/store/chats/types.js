export const HANDLE_ADD_MESSAGE_TO_CHAT = '@chats/ handle add message to chat';
export const ADD_CHAT = '@chats/ add chat';
export const DELETE_CHAT = '@chats/ delete chat';
export const HANDLE_ADD_NEW_CHAT = '@chats/ handle add new chat';
export const HANDLE_CHANGE_MESSAGE = '@chats/ handle change message';
export const HANDLE_DELETE_MESSAGE = '@chats/ handle delete message';

//===================================================================
// Work with firebase
//===================================================================

// Get all chats from firebase
export const GET_CHATS_START = '@chats/ get chats from db start';
export const GET_CHATS_SUCCESS = '@chats/ get chats from db success';
export const GET_CHATS_ERROR = '@chats/ get chats from db error';

// Get one chat from firebase by chat id
export const GET_CHAT_BY_ID_START = '@chats/ get chat by id from db start';
export const GET_CHAT_BY_ID_SUCCESS = '@chats/ get chat by id from db success';
export const GET_CHAT_BY_ID_ERROR = '@chats/ get chat by id from db error';

// Add new chat to firebase
export const ADD_NEW_CHAT_SUCCESS = '@chats/ add new chat to db';

// Delete chat from firebase
export const DELETE_CHAT_SUCCESS = '@chats/ delete chat by id from db success';

// Add new message to the chat in firebase
export const ADD_NEW_MESSAGE_TO_CHAT_START = '@chats/ add new message to chat in db start';
export const ADD_NEW_MESSAGE_TO_CHAT_SUCCESS = '@chats/ add new message to chat in db success';
export const ADD_NEW_MESSAGE_TO_CHAT_ERROR = '@chats/ add new message to chat in db error';

// Delete message from the chat in firebase
export const DELETE_MESSAGE_FROM_CHAT_SUCCESS = '@chats/ delete message from chat in db success';

// Get last chat id
export const GET_LAST_CHAT_ID = '@chats/ get last chat id from db';



