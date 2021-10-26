export const messageValueSelector = (currentChat) => (state) => {
    return state.chats[currentChat].messages.find(
        (chat) => chat[currentChat] === currentChat
    )?.value ?? ""
}