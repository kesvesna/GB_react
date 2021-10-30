import {useSelector} from "react-redux";

export const gistSelector = state => ({
    gists: state.GistsReducer.gists,
    gistError: state.GistsReducer.gistError,
    gistPending: state.GistsReducer.gistPending
});

export const gistByNameSelector = state => ({
    gistByName: state.GistsReducer.gistByName,
    gistByNameError: state.GistsReducer.gistByNameError,
    gistByNamePending: state.GistsReducer.gistByNamePending
});