import {
    getGists,
    getGistsByName,
    getGistError,
    getGistStart,
    getGistSuccess,
    getGistByNameError,
    getGistByNameStart,
    getGistByNameSuccess
} from "../../../store/gists";

describe('get gists thunk', () => {
    it('get gists success', async () => {
        const PAGE = 1;
        const ERROR = {error: 'test error'};
        const dispatch = jest.fn();
        const thunk = getGists(PAGE);
        const getGistsApi = jest.fn().mockResolvedValue({data: 'ok'})
        await thunk(dispatch, null, {getGistsApi});

        expect(getGistsApi).toBeCalledTimes(1);
        expect(getGistsApi).toBeCalledWith(PAGE);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getGistStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, getGistSuccess("ok"));

    })

    it('get gists error', async () => {
        const PAGE = 1;
        const ERROR = {error: 'error'};
        const dispatch = jest.fn();
        const thunk = getGists(PAGE);
        const getGistsApi = jest.fn().mockRejectedValue(ERROR);
        await thunk(dispatch, null, {getGistsApi});

        expect(getGistsApi).toBeCalledTimes(1);
        expect(getGistsApi).toBeCalledWith(PAGE);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getGistStart());
        //expect(dispatch).toHaveBeenNthCalledWith(2, getGistError(ERROR));

    })
})

