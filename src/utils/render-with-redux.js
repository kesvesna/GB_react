import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import {ChatsReducer} from "../store/chats";
import {render} from "@testing-library/react";

export const renderWithRedux = (component, initialState) => {
    const store = createStore(ChatsReducer, initialState);

    return {
        store,
        ...render(
            <Provider store={store}>
                <BrowserRouter>
                    {component}
                </BrowserRouter>
            </Provider>
        )
    }
}