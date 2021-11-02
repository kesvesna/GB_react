import {
    getGistError,
    getGistStart,
    getGistSuccess,
    getGistByNameError,
    getGistByNameStart,
    getGistByNameSuccess
} from './actions';

export const getGists = (page = 1) => async (dispatch, _, api) => {
    try {
        dispatch(getGistStart());
        const {data} = await api.getGistsApi(page);
        dispatch(getGistSuccess(data));
    } catch {
        dispatch(getGistError("get gist error"));
    }
}

export const getGistsByName = (name = '') => async (dispatch, _, api) => {
    try {
        dispatch(getGistByNameStart());
        const {data} = await api.searchGistsByUserNameApi(name);
        dispatch(getGistByNameSuccess(data));
    } catch {
        dispatch(getGistByNameError("get gist by name error"));
    }
}