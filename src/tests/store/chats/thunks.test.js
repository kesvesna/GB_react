import {
    getChatsError,
    getChatsStart,
    getChatsSuccess,
    getChats
} from "../../../store/chats";
import {firebaseDb} from "../../../api/v1/firebase/firebase";

describe('get all chats from db thunk', () => {

    it('get chats success', async () => {
        const dispatch = jest.fn();
        const thunk = getChats();
        const data = { name: 'data' };
        const getAllChatsApi = jest.fn().mockResolvedValue(data);
        await thunk(dispatch, null, {getAllChatsApi});
        expect(getAllChatsApi).toBeCalledTimes(1);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getChatsStart());
        //expect(dispatch).toHaveBeenNthCalledWith(2, getChatsSuccess(data));
    })

    it('get chats error', async () => {
        const ERROR = 'Get chats from db error';
        const dispatch = jest.fn();
        const thunk = getChats();
        const getAllChatsApi = jest.fn().mockRejectedValue(ERROR);
        await thunk(dispatch, null, {getAllChatsApi});

        expect(getAllChatsApi).toBeCalledTimes(1);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getChatsStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, getChatsError(ERROR));

    })
})

