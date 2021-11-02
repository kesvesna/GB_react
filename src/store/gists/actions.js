import {
    GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS,
    GET_GISTS_BY_NAME_SUCCESS, GET_GISTS_BY_NAME_START, GET_GISTS_BY_NAME_ERROR
} from './types';

export const getGistStart = () => ({
    type: GET_GISTS_START
});
export const getGistSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
});
export const getGistError = (error) => ({
    type: GET_GISTS_ERROR,
    payload: error
});

export const getGistByNameStart = () => ({
    type: GET_GISTS_BY_NAME_START
});
export const getGistByNameSuccess = (gists) => ({
    type: GET_GISTS_BY_NAME_SUCCESS,
    payload: gists
});
export const getGistByNameError = (error) => ({
    type: GET_GISTS_BY_NAME_ERROR,
    payload: error
});