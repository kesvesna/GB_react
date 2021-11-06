import {useSelector} from "react-redux";

export const messageValueSelector = (currentChat) => (state) => {
    return state.chats[currentChat].messages.find(
        (chat) => chat[currentChat] === currentChat
    )?.value ?? ""
}

export const lastMessageSelector = (chatId) => (state) => {
    const messages = state.ChatsReducer.chats[chatId];
    return messages[messages.length - 1];
}

export const chatsSelector = state => ({
    chats: state.ChatsReducer.chats,
    chatsError: state.ChatsReducer.chatsError,
    chatsPending: state.ChatsReducer.chatsPending
});

export const chatByIdSelector = state => ({
    chatById: state.ChatsReducer.chatById,
    chatByIdError: state.ChatsReducer.chatByIdError,
    chatByIdPending: state.ChatsReducer.chatByIdPending
});

export const lastChatIdSelector = state => ({
    lastChatId: state.ChatsReducer.lastChatId,
})
