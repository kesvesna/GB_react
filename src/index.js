import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProfilePage} from "./pages/profile/ProfilePage";
import {store, persistor} from "./store/create-store";
import {Provider} from "react-redux";
import {MyNavBar} from './components/presentations/AppBar/AppBar';
import {HomePage} from "./pages/home/HomePage";
import {ErrorPage} from "./pages/error/ErrorPage";
import {PersistGate} from 'redux-persist/integration/react'
import {GistPage} from "./pages/gist/GistPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MyNavBar/>
                    <Switch>
                        <Route path="/profile">
                            <ProfilePage/>
                        </Route>
                        <Route exact path="/chats/:id?">
                            <App/>
                        </Route>
                        <Route exact path="/gist">
                            <GistPage/>
                        </Route>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="*">
                            <ErrorPage/>
                        </Route>
                    </Switch>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

