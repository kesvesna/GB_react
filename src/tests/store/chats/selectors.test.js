import {chatsSelector} from "../../../store/chats";

const state = {
    ChatsReducer: {
        chats: {
            chat1: {
                name: 'First chat', messages: {
                    id1: {author: 'User', message: 'First message from User'},
                    id2: {author: 'Bot', message: 'First message from Bot'},
                }
            },
            chat2: {
                name: 'Second chat', messages: {
                    id1: {author: 'User', message: 'First message from User'},
                    id2: {author: 'Bot', message: 'First message from Bot'},
                }
            }
        },
        chatsError: false,
        chatsPending: false
    }
}

describe("Check chatsSelector", () => {
    it("Call with state", () => {
        const result = chatsSelector(state);
        expect(result).toStrictEqual({
            "chats": {
                "chat1": {
                    "name": "First chat", "messages": {
                        "id1": {
                            "author": "User",
                            "message": "First message from User",
                        },
                        "id2": {
                            "author": "Bot",
                            "message": "First message from Bot",
                        },
                    }
                },
                "chat2": {
                    "name": "Second chat", "messages": {
                        "id1": {
                            "author": "User",
                            "message": "First message from User",
                        },
                        "id2": {
                            "author": "Bot",
                            "message": "First message from Bot",
                        },
                    }
                }
            },
            "chatsError": false,
            "chatsPending": false
        });
    });

    it("Call with state null", () => {
        const result = chatsSelector(null);
        expect(result).toBe(console.log('State in chatsSelector is null or undefined'));
    });

    it("Call without state", () => {
        const result = chatsSelector();
        expect(result).toBe(console.log('State in chatsSelector is null or undefined'));
    });
})
