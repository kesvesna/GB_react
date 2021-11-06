
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

export const chatMessagesSelector = (chatId) => (state) => {
        let currentMessages = null;
        Object.keys(state.ChatsReducer.chats).map((item, index) => {
           if(chatId === state.ChatsReducer.chats[item][0]){
               currentMessages = state.ChatsReducer.chats[item][1].messages;
           }
        });
        if(currentMessages !== null && currentMessages !== undefined){
            return [...Object.entries(currentMessages)];
        }
        return [...Object.entries({default: {date: 'Today', author: 'Site', message: 'No messages in this chat'}})];
};

export const chatNameSelector = (chatId) => (state) => {
    let chatName = 'Choose chat';
    Object.keys(state.ChatsReducer.chats).map((item, index) => {
        if(chatId === state.ChatsReducer.chats[item][0]){
            chatName = state.ChatsReducer.chats[item][1].name;
        }
    });
    return chatName;
};

export const chatByIdSelector = state => ({
    chatById: state.ChatsReducer.chatById,
    chatByIdError: state.ChatsReducer.chatByIdError,
    chatByIdPending: state.ChatsReducer.chatByIdPending
});

export const lastChatIdSelector = state => ({
    lastChatId: state.ChatsReducer.lastChatId,
})
