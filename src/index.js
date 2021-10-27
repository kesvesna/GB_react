import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProfilePage} from "./pages/profile/ProfilePage";
import {store} from "./store/create-store";
import {Provider} from "react-redux";
import {MyNavBar} from './components/AppBar/AppBar';
import {HomePage} from "./pages/home/HomePage";
import {ErrorPage} from "./pages/error/ErrorPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MyNavBar/>
                <Switch>
                    <Route path="/profile">
                        <ProfilePage/>
                    </Route>
                    <Route exact path="/chats/:id?">
                        <App/>
                    </Route>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="*">
                        <ErrorPage/>
                    </Route>
                </Switch>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

