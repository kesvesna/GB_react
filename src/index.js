import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProfilePage} from "./store";
import {store} from "./store/create-store";
import {Provider} from "react-redux";
import {MyNavBar} from './components/AppBar/AppBar';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
            <MyNavBar/>
            <Switch>
                <Route path="/profile">
                        <ProfilePage/>
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
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

