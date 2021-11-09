export const chatsSelector = state => (
    state && {
        chats: state.ChatsReducer.chats,
        chatsError: state.ChatsReducer.chatsError,
        chatsPending: state.ChatsReducer.chatsPending
    } || console.log('State in chatsSelector is null or undefined'));


export const chatMessagesSelector = (chatId) => (state) => {
    let currentMessages = null;
    Object.keys(state.ChatsReducer.chats).map((item, index) => {
        if (chatId === state.ChatsReducer.chats[item][0]) {
            currentMessages = state.ChatsReducer.chats[item][1].messages;
        }
    });
    if (currentMessages !== null && currentMessages !== undefined) {
        return [...Object.entries(currentMessages)];
    }
    return [...Object.entries({default: {date: 'Today', author: 'Site', message: 'No messages in this chat'}})];
};

export const chatNameSelector = (chatId) => (state) => {
    let chatName = 'Choose chat';
    Object.keys(state.ChatsReducer.chats).map((item, index) => {
        if (chatId === state.ChatsReducer.chats[item][0]) {
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
