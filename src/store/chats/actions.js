import {HANDLE_ADD_MESSAGE_TO_CHAT} from './types';

export const handleAddMessageToChat = (message, currentChat) => ({
    type: HANDLE_ADD_MESSAGE_TO_CHAT,
    payload: {message, currentChat}
})