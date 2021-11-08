import {ADD_NEW_MESSAGE_TO_CHAT_SUCCESS} from '../store/chats/types';
import {handleAddMessageToChat} from "../store/chats/actions";
import {addNewMessageToChat} from "../store/chats";


export const botMessage = (store) => (next) => (action) => {
    if (action.type === ADD_NEW_MESSAGE_TO_CHAT_SUCCESS && action.payload.message !== '') {
        if (action.payload.author !== "Bot") {
            setTimeout(() => {
                store.dispatch(addNewMessageToChat("Message from bot", action.payload.chatId, 'Bot'));
            }, 1000);
        }
    }
    return next(action);
}