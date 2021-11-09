import {
    getGists,
    getGistsByName,
    getGistError,
    getGistStart,
    getGistSuccess,
    getGistByNameError,
    getGistByNameStart,
    getGistByNameSuccess,
    searchGistsByUserNameApi
} from "../../../store/gists";

describe('get gists thunk', () => {
    it('get gists success', async () => {
        const PAGE = 1;
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
        const ERROR = 'get gist error';
        const dispatch = jest.fn();
        const thunk = getGists(PAGE);
        const getGistsApi = jest.fn().mockRejectedValue(ERROR);
        await thunk(dispatch, null, {getGistsApi});

        expect(getGistsApi).toBeCalledTimes(1);
        expect(getGistsApi).toBeCalledWith(PAGE);
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getGistStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, getGistError(ERROR));

    })
})

describe("search gists thunk", () => {
    it("search gists success", async () => {
        const SEARCH = "test"
        const isCurrentQuery = true

        const dispatch = jest.fn()
        const searchGistsByUserNameApi = jest
            .fn()
            .mockResolvedValue({ data: SEARCH })

        const thunk = getGistsByName(SEARCH, isCurrentQuery)

        await thunk(dispatch, null, { searchGistsByUserNameApi })

        expect(searchGistsByUserNameApi).toBeCalledTimes(1)
        expect(searchGistsByUserNameApi).toBeCalledWith(SEARCH)

        expect(dispatch).toBeCalledTimes(2)
        expect(dispatch).toHaveBeenNthCalledWith(1,  getGistByNameStart())
        expect(dispatch).toHaveBeenNthCalledWith(2, getGistByNameSuccess(SEARCH))
    })
})

