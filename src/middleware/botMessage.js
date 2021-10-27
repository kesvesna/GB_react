import {HANDLE_ADD_MESSAGE_TO_CHAT} from '../store/chats/types';
import {handleAddMessageToChat} from "../store/chats/actions";
import {useParams} from "react-router";

export const botMessage = (store) => (next) => (action) => {
    if (action.type === HANDLE_ADD_MESSAGE_TO_CHAT) {

        if (action.payload.author !== "Bot") {
            setTimeout(() => {
                store.dispatch(handleAddMessageToChat("Message from bot", action.payload.chatId, 'Bot'));
            }, 1000);
        }
    }
    return next(action);
}