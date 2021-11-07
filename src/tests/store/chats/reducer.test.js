import {ChatsReducer} from '../../../store/chats/reducer';
import {getChatsSuccess} from "../../../store/chats/actions";

describe('chats reducer', () => {
    it('get all chats', () => {
        const state = ChatsReducer({chats: {}}, getChatsSuccess(
            {
                chat1: {name: 'First chat'},
                chat2: {name: 'Second chat'}
            }
            )
        );
        expect(state.chats.length).toBe(2);
        expect(state.chats[0][0]).toEqual('chat1');
        expect(state.chats[0][1]).toHaveProperty('name', 'First chat');
    })
})