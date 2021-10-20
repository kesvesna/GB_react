import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProfilePage} from "./store";
import {store} from "./store/create-store";
import {Provider} from "react-redux";
import { MyNavBar } from './components/AppBar/AppBar';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MyNavBar />
            <Switch>
                <Route path="/profile">
                    <Provider store={store}>
                        <ProfilePage/>
                    </Provider>
                </Route>
                <Route exact path="/chats">
                    <App>
                    </App>
                </Route>
                <Route exact path="/chats/:id">
                    <App>
                    </App>
                </Route>
                <Route exact path="/">
                    <h1>Home page</h1>
                </Route>
                <Route path="*">
                    <h1>Error 404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

