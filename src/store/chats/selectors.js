export const messageValueSelector = (currentChat) => (state) => {
    return state.chats[currentChat].messages.find(
        (chat) => chat[currentChat] === currentChat
    )?.value ?? ""
}

export const lastMessageSelector = (chatId)=>(state)=>{
    const messages = state.ChatsReducer.chats[chatId];
    return messages[messages.length - 1];
}