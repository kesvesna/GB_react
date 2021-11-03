import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ProfilePage} from "./pages/profile/ProfilePage";
import {store, persistor} from "./store/create-store";
import {Provider, useDispatch} from "react-redux";
import {MyNavBar} from './components/presentations/AppBar/AppBar';
import {HomePage} from "./pages/home/HomePage";
import {ErrorPage} from "./pages/error/ErrorPage";
import {PersistGate} from 'redux-persist/integration/react'
import {GistPage} from "./pages/gist/GistPage";
import {LoginPage} from "./pages/login/LoginPage";
import {SignUpPage} from "./pages/sign-up/SignUpPage";
import {PrivateRoute, PublicRoute} from "./components/route/Route";
import {onAuthStateChanged, sessionSelector} from "./store/session";
import {useSelector} from "react-redux";
import {getAllChatsApi, sendAllChatsApi} from "./api/v1/chats/chats";
import {nanoid} from "nanoid";

export function Main() {

    const session = useSelector(sessionSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onAuthStateChanged());

        sendAllChatsApi(
            {
                [nanoid()]: {
                    name: 'Chat 1', messages: [
                        {id: nanoid(), author: 'User', message: 'Message 1', date: new Date()},
                        {id: nanoid(), author: 'Bot', message: 'Message 1', date: new Date()},
                        {id: nanoid(), author: 'User', message: 'Message 2', date: new Date()},
                        {id: nanoid(), author: 'Bot', message: 'Message 2', date: new Date()}
                    ]
                },
                [nanoid()]: {
                    name: 'Chat 2', messages: [
                        {id: nanoid(), author: 'User', message: 'Message 3', date: new Date()},
                        {id: nanoid(), author: 'Bot', message: 'Message 3', date: new Date()},
                        {id: nanoid(), author: 'User', message: 'Message 4', date: new Date()},
                        {id: nanoid(), author: 'Bot', message: 'Message 4', date: new Date()}
                    ]
                },
                [nanoid()]: {
                    name: 'Chat 3', messages: [
                        {id: nanoid(), author: 'User', message: 'Message 5', date: new Date()},
                        {id: nanoid(), author: 'Bot', message: 'Message 5', date: new Date()},
                        {id: nanoid(), author: 'User', message: 'Message 6', date: new Date()},
                        {id: nanoid(), author: 'Bot', message: 'Message 6', date: new Date()}
                    ]
                },
            });

        getAllChatsApi().then((snapshot) => {
            const messages = {};

            snapshot.forEach((snap) => {
                messages[snap.key] = Object.values(snap.val());
            });

            if (messages.length < 1) {
                console.log('chats is empty');
            } else {
                console.log('chats', messages);
            }
        })

    }, [dispatch])

    const isAuth = !!session?.email;

    return (
        <>
            <MyNavBar isAuth={isAuth}/>
            <Switch>
                <PrivateRoute path="/profile" isAuth={isAuth}>
                    <ProfilePage/>
                </PrivateRoute>
                <PrivateRoute exact path="/chats/:id?" isAuth={isAuth}>
                    <App/>
                </PrivateRoute>
                <PrivateRoute exact path="/gist" isAuth={isAuth}>
                    <GistPage/>
                </PrivateRoute>
                <PublicRoute exact path="/login" isAuth={isAuth}>
                    <LoginPage/>
                </PublicRoute>
                <PublicRoute exact path="/sign-up" isAuth={isAuth}>
                    <SignUpPage/>
                </PublicRoute>
                <PublicRoute exact path="/" isAuth={isAuth}>
                    <HomePage/>
                </PublicRoute>
                <PublicRoute path="*" isAuth={isAuth}>
                    <ErrorPage/>
                </PublicRoute>
            </Switch>
        </>

    )
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Main/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
);
