import {firebaseApp} from "../../api/v1/firebase/firebase";
import {getSessionError, getSessionSuccess} from "./actions";

export const onAuthStateChanged = () => (dispatch) => {
    firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(getSessionSuccess(user));
        } else {
            dispatch(getSessionError());
        }
    })
}